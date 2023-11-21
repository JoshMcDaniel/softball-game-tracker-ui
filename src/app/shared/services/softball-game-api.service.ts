import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { SoftballGame } from '../models/SoftballGame.model';
import baseApiUrl from '../constants/baseApiUrl';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SoftballGameApiService {
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  getAllActiveGames(): Observable<SoftballGame[]> {
    return this.http
      .get<SoftballGame[]>(`${baseApiUrl}/getAllActiveGames`)
      .pipe(catchError((err) => this.fetAllGamesErrorHandler(err)));
  }

  getGameById(gameId: string): Observable<SoftballGame> {
    const options = {
      params: new HttpParams().set('documentId', gameId),
    };
    return this.http.get<SoftballGame>(`${baseApiUrl}/getGameById`, options);
  }

  fetAllGamesErrorHandler(error: HttpErrorResponse) {
    const config: MatSnackBarConfig = {
      duration: 4_000,
    };
    this._snackBar.open('Error retrieving games. Try again later.', '', config);
    return throwError(() => error.message || 'server error.');
  }
}
