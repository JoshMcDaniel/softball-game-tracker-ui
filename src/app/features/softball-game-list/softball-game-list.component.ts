import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftballGame } from '../../shared/models/SoftballGame.model';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-softball-game-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    NgxSkeletonLoaderModule,
  ],
  templateUrl: './softball-game-list.component.html',
  styleUrl: './softball-game-list.component.scss',
})
export class SoftballGameListComponent {
  @Input() title: string = '';
  @Input() softballGames: SoftballGame[] | null | undefined = [];
  @Input() displayActionButtons: boolean = false;
  @Output() deleteGame = new EventEmitter<SoftballGame>();
}
