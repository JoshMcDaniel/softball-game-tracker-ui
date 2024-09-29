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
    // children: [
    //   {
    //     path: 'create-game',
    //     title: 'Create Games',
    //     loadComponent: () =>
    //       import(
    //         './features/dashboard/create-games/create-games.component'
    //       ).then((mod) => mod.CreateGamesComponent),
    //   },
    //   {
    //     path: 'manage-game/:id',
    //     loadComponent: () =>
    //       import('./features/dashboard/manage-game/manage-game.component').then(
    //         (mod) => mod.ManageGameComponent
    //       ),
    //   },
    //   {
    //     path: 'manage-game',
    //     loadComponent: () =>
    //       import('./features/dashboard/manage-game/manage-game.component').then(
    //         (mod) => mod.ManageGameComponent
    //       ),
    //   },
    // ],
  },
  {
    path: 'dashboard/create-game',
    title: 'Create Game',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/dashboard/create-games/create-games.component').then(
        (mod) => mod.CreateGamesComponent
      ),
  },
  {
    path: 'dashboard/manage-game/:id',
    title: 'Manage Game',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/dashboard/manage-game/manage-game.component').then(
        (mod) => mod.ManageGameComponent
      ),
  },
  {
    path: 'dashboard/manage-game',
    title: 'Manage Game',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/dashboard/manage-game/manage-game.component').then(
        (mod) => mod.ManageGameComponent
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
