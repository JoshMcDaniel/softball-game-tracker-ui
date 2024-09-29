import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveGameScoreboardComponent } from '../../active-game-scoreboard/active-game-scoreboard.component';

@Component({
  selector: 'app-manage-game',
  standalone: true,
  imports: [CommonModule, ActiveGameScoreboardComponent],
  templateUrl: './manage-game.component.html',
  styleUrl: './manage-game.component.scss',
})
export class ManageGameComponent {}
