import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-team-score-card',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './team-score-card.component.html',
  styleUrl: './team-score-card.component.scss',
})
export class TeamScoreCardComponent {
  @Input()
  teamName: string = '';
  @Input()
  teamType: 'home' | 'away' | undefined;
  @Input()
  score: number = 0;
}
