import { Injectable, inject } from '@angular/core';
import { SoftballGame } from '../models/SoftballGame.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SoftballGameStreamService {
  afs: AngularFirestore = inject(AngularFirestore);

  getSoftballGameStream = (
    gameId: string
  ): Observable<SoftballGame | undefined> =>
    this.afs
      .doc<SoftballGame>('activeSoftballGames' + '/' + gameId)
      .valueChanges();

  getAllSoftballGamesStream = (): Observable<SoftballGame[] | undefined> =>
    this.afs.collection<SoftballGame>('activeSoftballGames').valueChanges();
}
