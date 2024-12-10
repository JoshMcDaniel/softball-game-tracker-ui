import { Component, Input } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-game-stats-block',
  standalone: true,
  imports: [MatToolbar],
  templateUrl: './game-stats-block.component.html',
  styleUrl: './game-stats-block.component.scss',
})
export class GameStatsBlockComponent {
  @Input() balls: number = 0;
  @Input() strikes: number = 0;
  @Input() outs: number = 0;
  @Input() inning: number = 0;
}
