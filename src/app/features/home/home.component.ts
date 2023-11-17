import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { SoftballGameListComponent } from '../softball-game-list/softball-game-list.component';
import { SoftballGame } from '../../shared/models/SoftballGame.model';
import { SoftballGameApiService } from '../../shared/services/softball-game-api.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    DatePipe,
    SoftballGameListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = 'Softball Scoreboard';
  slogan = 'Live Softball Game Scoreboard';
  listTitle = 'Active Softball Games';
  listSubTitle = 'Select a game to see the current stats';
  softballGames: SoftballGame[] = [];
  constructor(private service: SoftballGameApiService) {
    this.service
      .getAllActiveGames()
      .subscribe((res) => (this.softballGames = res));
  }
}
