import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SoftballGameApiService } from './shared/services/softball-game-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'softball-game-tracker-ui';
  constructor(private service: SoftballGameApiService) {
    this.service
      .getGameById('dirt-divas-vs-bandits')
      .subscribe((res) => console.log(res));
  }
}
