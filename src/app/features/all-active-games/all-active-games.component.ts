import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftballGame } from '../../shared/models/SoftballGame.model';
import { SoftballGameApiService } from '../../shared/services/softball-game-api.service';
import { MatCardModule } from '@angular/material/card';
import { SoftballGameListComponent } from '../softball-game-list/softball-game-list.component';

@Component({
  selector: 'app-all-active-games',
  standalone: true,
  imports: [CommonModule, MatCardModule, SoftballGameListComponent],
  templateUrl: './all-active-games.component.html',
  styleUrl: './all-active-games.component.scss',
})
export class AllActiveGamesComponent {
  listTitle = 'Active Softball Games';
  listSubTitle = 'Select a game to see the current stats';
  softballGames: SoftballGame[] = [];
  constructor(private service: SoftballGameApiService) {
    this.service
      .getAllActiveGames()
      .subscribe((res) => (this.softballGames = res));
  }
}
