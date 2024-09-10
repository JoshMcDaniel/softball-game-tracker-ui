import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { first, map, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const isUserLoggedIn = authService.user$.pipe(
    first(),
    tap((user) => {
      if (!user) {
        console.log('Cannot activate route. User is not authenticated.');
        router.navigate(['/']);
      }
    }),
    map((user) => !!user)
  );

  return isUserLoggedIn;
};
