import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftballGame } from '../../shared/models/SoftballGame.model';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-softball-game-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './softball-game-list.component.html',
  styleUrl: './softball-game-list.component.scss',
})
export class SoftballGameListComponent {
  @Input() title: string = '';
  @Input() softballGames: SoftballGame[] = [];
}