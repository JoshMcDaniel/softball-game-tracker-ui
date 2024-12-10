import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-score-block',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './score-block.component.html',
  styleUrl: './score-block.component.scss',
})
export class ScoreBlockComponent {
  @Input() text: string = '';
  @Input() score: number = 99;
}
