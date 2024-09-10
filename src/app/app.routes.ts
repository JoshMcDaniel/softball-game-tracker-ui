import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', title: 'Softball Scoreboard', component: HomeComponent },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () =>
      import('./features/login/login.component').then(
        (mod) => mod.LoginComponent
      ),
  },
  // {
  //   path: 'register',
  //   title: 'Register',
  //   loadComponent: () =>
  //     import('./features/register/register.component').then(
  //       (mod) => mod.RegisterComponent
  //     ),
  // },
  {
    path: 'dashboard',
    title: 'Dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/dashboard/dashboard.component').then(
        (mod) => mod.DashboardComponent
      ),
  },
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
