import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  SoftballGame,
  SoftballGameStatus,
} from '../../../shared/models/SoftballGame.model';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface CreateGameForm {
  homeTeamName: FormControl<string>;
  awayTeamName: FormControl<string>;
  gameStatus: FormControl<SoftballGameStatus>;
  startDateTime: FormControl<string>;
  strikesAllowed: FormControl<number>;
}

interface GameStatusOption {
  displayText: string;
  value: SoftballGameStatus;
}

@Component({
  selector: 'app-create-games',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [MatDatepickerModule],
  templateUrl: './create-games.component.html',
  styleUrl: './create-games.component.scss',
})
export class CreateGamesComponent {
  gameStatusOptions: GameStatusOption[] = [
    {
      displayText: 'Scheduled',
      value: 'SCHEDULED',
    },
    {
      displayText: 'Active',
      value: 'ACTIVE',
    },
    {
      displayText: 'Final',
      value: 'FINAL',
    },
  ];

  createGameForm = new FormGroup<CreateGameForm>({
    homeTeamName: new FormControl('', { nonNullable: true }),
    awayTeamName: new FormControl('', { nonNullable: true }),
    gameStatus: new FormControl('SCHEDULED', { nonNullable: true }),
    startDateTime: new FormControl('', { nonNullable: true }),
    strikesAllowed: new FormControl(3, { nonNullable: true }),
  });

  onSubmit(): void {
    const formData = this.createGameForm.value;
    const game = this.createFullGame(formData);
    console.log({ game });
  }

  createFullGame(formData: Partial<SoftballGame>): SoftballGame {
    const game: SoftballGame = {
      homeTeamName: '',
      awayTeamName: '',
      gameStatus: 'SCHEDULED',
      startDateTime: '',
      innings: [
        {
          homeTeamScore: 0,
          awayTeamScore: 0,
        },
      ],
      strikesAllowed: 3,
      strikes: 0,
      balls: 0,
      outs: 0,
      ...formData,
    };

    return game;
  }
}
