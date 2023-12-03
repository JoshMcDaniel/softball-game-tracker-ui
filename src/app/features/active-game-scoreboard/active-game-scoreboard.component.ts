import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { SoftballGameStreamService } from '../../shared/services/softball-game-stream.service';
import { ScoreBlockComponent } from './score-block/score-block.component';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-active-game-scoreboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, ScoreBlockComponent],
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
