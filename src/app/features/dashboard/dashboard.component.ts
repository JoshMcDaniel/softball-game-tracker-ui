import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { SoftballGameApiService } from '../../shared/services/softball-game-api.service';
import { SoftballGameListComponent } from '../softball-game-list/softball-game-list.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    SoftballGameListComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  softballGameApiService = inject(SoftballGameApiService);

  isRequestPending = false;
  $softballGames = this.softballGameApiService
    .getAllActiveGames()
    .pipe(finalize(() => (this.isRequestPending = false)));
}
