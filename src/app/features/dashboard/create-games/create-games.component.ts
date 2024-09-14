import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {
  SoftballGame,
  SoftballGameStatus,
} from '../../../shared/models/SoftballGame.model';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
  MatOptionModule,
} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SoftballGameApiService } from '../../../shared/services/softball-game-api.service';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

const moment = _rollupMoment || _moment;

interface CreateGameForm {
  homeTeamName: FormControl<string>;
  awayTeamName: FormControl<string>;
  gameStatus: FormControl<SoftballGameStatus>;
  strikesAllowed: FormControl<number>;
  startDate: FormControl<string>;
  startTime: FormControl<string>;
}

interface GameStatusOption {
  displayText: string;
  value: SoftballGameStatus;
}

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MMM-YYYY',
  },
  display: {
    dateInput: 'DD-MMM-YYYY',
    monthYearLabel: 'DD-MMM-YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'DD-MMM-YYYY',
  },
};

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
    NgxMaterialTimepickerModule,
  ],
  providers: [
    MatDatepickerModule,
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  templateUrl: './create-games.component.html',
  styleUrl: './create-games.component.scss',
})
export class CreateGamesComponent {
  softballGameApiService = inject(SoftballGameApiService);

  isRequestPending = false;

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
    strikesAllowed: new FormControl(3, { nonNullable: true }),
    startDate: new FormControl('', { nonNullable: true }),
    startTime: new FormControl('', { nonNullable: true }),
  });

  onSubmit(): void {
    if (!this.createGameForm.valid) {
      return;
    }

    this.isRequestPending = true;

    const data = this.getFormattedGameDataFromForm();
    const game = this.createFullGame(data);

    this.softballGameApiService.createSoftballGame(game).subscribe({
      next: (res) => {
        this.createGameForm.reset();
        console.log('Game created: ', res);
      },
      error: (err) => console.error({ err }),
      complete: () => (this.isRequestPending = false),
    });
  }

  getFormattedGameDataFromForm() {
    const { startDate, startTime, ...formData } = this.createGameForm.value;
    const startDateTime = moment(
      `${moment(startDate).format('DD-MMM-YYYY')} ${startTime}`,
      'DD-MMM-YYYY hh:mm A'
    ).toISOString();
    return { startDateTime, ...formData };
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
