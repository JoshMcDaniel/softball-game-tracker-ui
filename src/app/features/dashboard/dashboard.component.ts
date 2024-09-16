import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SoftballGameApiService } from '../../shared/services/softball-game-api.service';
import { SoftballGameListComponent } from '../softball-game-list/softball-game-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from '../../shared/dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { SoftballGame } from '../../shared/models/SoftballGame.model';
import { SoftballGameStreamService } from '../../shared/services/softball-game-stream.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  private _snackBar = inject(MatSnackBar);
  softballGameApiService = inject(SoftballGameApiService);
  softballGameStreamService = inject(SoftballGameStreamService);
  dialog = inject(MatDialog);

  isRequestPending = false;
  // $softballGames = this.softballGameApiService
  //   .getAllActiveGames()
  //   .pipe(finalize(() => (this.isRequestPending = false)));
  $softballGames = this.softballGameStreamService.getAllSoftballGamesStream();

  deleteGame(game: SoftballGame) {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      data: {
        message: `Are you sure you want to delete the ${game.homeTeamName} vs ${game.awayTeamName} game? This action cannot be undone.`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.isRequestPending = true;
        this.softballGameApiService
          .deleteSoftballGame(game.documentId as string)
          .subscribe({
            next: () => {
              this._snackBar.open('Successfully deleted the game', 'Close', {
                duration: 5_000,
                panelClass: 'alert-success',
              });
            },
            error: () => {
              this._snackBar.open('Error trying to delete the game', 'Close', {
                duration: 5_000,
                panelClass: 'alert-error',
              });
            },
            complete: () => (this.isRequestPending = false),
          });
      }
    });
  }
}
