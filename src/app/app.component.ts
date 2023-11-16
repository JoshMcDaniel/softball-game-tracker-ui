import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SoftballGameApiService } from './shared/services/softball-game-api.service';
import { SoftballGame } from './shared/models/SoftballGame.model';
import { MatDividerModule } from '@angular/material/divider';
import { SoftballGameListComponent } from './features/softball-game-list/softball-game-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatDividerModule,
    DatePipe,
    SoftballGameListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Softball Game Tracker';
  slogan = 'Live Softball Game Scoreboard';
  softballGames: SoftballGame[] = [];
  constructor(private service: SoftballGameApiService) {
    this.service
      .getAllActiveGames()
      .subscribe((res) => (this.softballGames = res));
  }
}
