import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', title: 'Softball Scoreboard', component: HomeComponent },
  {
    path: 'active-games/:id',
    loadComponent: () =>
      import(
        './features/active-game-scoreboard/active-game-scoreboard.component'
      ).then((mod) => mod.ActiveGameScoreboardComponent),
  },
  {
    path: 'active-games',
    title: 'Active Games',
    loadComponent: () =>
      import('./features/all-active-games/all-active-games.component').then(
        (mod) => mod.AllActiveGamesComponent
      ),
  },
];
