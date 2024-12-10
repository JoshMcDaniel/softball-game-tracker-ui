import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SoftballGameStreamService } from '../../shared/services/softball-game-stream.service';
import { TeamScoreCardComponent } from '../team-score-card/team-score-card.component';
import { GameStatsBlockComponent } from './game-stats-block/game-stats-block.component';

@Component({
  selector: 'app-active-game-scoreboard',
  standalone: true,
  imports: [CommonModule, TeamScoreCardComponent, GameStatsBlockComponent],
  templateUrl: './active-game-scoreboard.component.html',
  styleUrl: './active-game-scoreboard.component.scss',
})
export class ActiveGameScoreboardComponent {
  route = inject(ActivatedRoute);
  gameId = this.route.snapshot.params['id'];
  gameStreamService = inject(SoftballGameStreamService);
  activeSoftballGame$ = this.gameStreamService.getSoftballGameStream(
    this.gameId
  );
}
