import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftballGame } from '../models/SoftballGame.model';

@Injectable({
  providedIn: 'root',
})
export class SoftballGameApiService {
  constructor(private http: HttpClient) {}

  getAllActiveGames(): Observable<SoftballGame[]> {
    return this.http.get<SoftballGame[]>(`/api/getAllActiveGames`);
  }

  getGameById(gameId: string): Observable<SoftballGame> {
    const options = {
      params: new HttpParams().set('documentId', gameId),
    };
    return this.http.get<SoftballGame>(`/api/getGameById`, options);
  }
}
