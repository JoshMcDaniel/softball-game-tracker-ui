import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { SoftballGameListComponent } from '../softball-game-list/softball-game-list.component';
import { SoftballGame } from '../../shared/models/SoftballGame.model';
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
  listSubTitle = 'View the stats of active games';
  softballGames: SoftballGame[] = [];
}
