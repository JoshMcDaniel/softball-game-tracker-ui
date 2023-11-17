import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ActiveGameScoreboardComponent } from './features/active-game-scoreboard/active-game-scoreboard.component';

export const routes: Routes = [
  { path: '', title: 'Softball Scoreboard', component: HomeComponent },
  {
    path: '**',
    component: ActiveGameScoreboardComponent,
  },
];
