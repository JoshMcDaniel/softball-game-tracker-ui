import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseApiUrl from '../constants/baseApiUrl';

@Injectable({
  providedIn: 'root',
})
export class SoftballGameApiService {
  constructor(private http: HttpClient) {}

  getAllActiveGames() {
    return this.http.get(baseApiUrl + '');
  }

  getGameById(gameId: string) {
    const options = {
      params: new HttpParams().set('documentId', gameId),
    };
    return this.http.get(`/api/getGameById`, options);
  }
}
