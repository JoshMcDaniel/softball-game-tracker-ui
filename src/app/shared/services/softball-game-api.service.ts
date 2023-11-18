import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SoftballGame } from '../models/SoftballGame.model';

@Injectable({
  providedIn: 'root',
})
export class SoftballGameApiService {
  $softballGames: BehaviorSubject<SoftballGame[]> = new BehaviorSubject<
    SoftballGame[]
  >([]);

  constructor(private http: HttpClient) {
    this.getAllActiveGames().subscribe((res) => this.$softballGames.next(res));
  }

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
