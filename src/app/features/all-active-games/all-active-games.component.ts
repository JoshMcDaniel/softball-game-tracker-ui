import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftballGameApiService } from '../../shared/services/softball-game-api.service';
import { MatCardModule } from '@angular/material/card';
import { SoftballGameListComponent } from '../softball-game-list/softball-game-list.component';
import { finalize } from 'rxjs';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-active-games',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatSnackBarModule,
    SoftballGameListComponent,
  ],
  templateUrl: './all-active-games.component.html',
  styleUrl: './all-active-games.component.scss',
})
export class AllActiveGamesComponent {
  softballGameApiService = inject(SoftballGameApiService);

  listTitle = 'Active Softball Games';
  listSubTitle = 'Select a game to see the current stats';
  isRequestPending = false;
  $softballGames = this.softballGameApiService
    .getAllActiveGames()
    .pipe(finalize(() => (this.isRequestPending = false)));
}
