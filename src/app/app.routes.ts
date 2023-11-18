import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ActiveGameScoreboardComponent } from './features/active-game-scoreboard/active-game-scoreboard.component';
import { AllActiveGamesComponent } from './features/all-active-games/all-active-games.component';

export const routes: Routes = [
  { path: '', title: 'Softball Scoreboard', component: HomeComponent },
  {
    path: 'active-games/:id',
    component: ActiveGameScoreboardComponent,
  },
  {
    path: 'active-games',
    title: 'Active Games',
    component: AllActiveGamesComponent,
  },
];
