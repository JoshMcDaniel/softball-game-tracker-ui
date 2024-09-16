import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, first, from, map, throwError } from 'rxjs';
import { SoftballGame } from '../models/SoftballGame.model';
import baseApiUrl from '../constants/baseApiUrl';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class SoftballGameApiService {
  afs = inject(AngularFirestore);
  private http = inject(HttpClient);
  private _snackBar = inject(MatSnackBar);

  getAllActiveGames = (): Observable<SoftballGame[] | undefined> =>
    this.afs
      .collection<SoftballGame>('activeSoftballGames')
      .snapshotChanges()
      .pipe(
        map((snaps) => snaps.map((snap) => snap.payload.doc.data())),
        first()
      );

  // getAllActiveGames(): Observable<SoftballGame[]> {
  //   return this.http
  //     .get<SoftballGame[]>(`${baseApiUrl}/getAllActiveGames`)
  //     .pipe(catchError((err) => this.fetAllGamesErrorHandler(err)));
  // }

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

  createSoftballGame(gameDetails: SoftballGame) {
    const documentId = this.createSoftballGameId(gameDetails);
    const data = {
      documentId,
      ...gameDetails,
    };
    const promise = this.afs
      .collection<SoftballGame>('activeSoftballGames')
      .doc(documentId)
      .set(data);

    return from(promise);
  }

  createSoftballGameId(softballGame: SoftballGame): string {
    const homeTeamId = softballGame.homeTeamName
      .replaceAll(' ', '-')
      .toLowerCase();
    const awayTeamId = softballGame.awayTeamName
      .replaceAll(' ', '-')
      .toLowerCase();
    return (
      homeTeamId + '-vs-' + awayTeamId + '_T_' + softballGame.startDateTime
    );
  }

  deleteSoftballGame(documentId: string) {
    const promise = this.afs
      .collection<SoftballGame>('activeSoftballGames')
      .doc(documentId)
      .delete();

    return from(promise);
  }
}
