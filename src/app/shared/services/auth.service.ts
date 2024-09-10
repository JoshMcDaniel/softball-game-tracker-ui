import { Injectable, inject, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  updateProfile,
  user,
  signOut,
  AuthProvider,
  signInWithPopup,
  UserCredential,
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';
import { UserInterface } from '../models/UserInterface.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _firebaseAuth: Auth = inject(Auth);
  private _router = inject(Router);
  user$ = user(this._firebaseAuth);

  currentUserSignal = signal<UserInterface | null | undefined>(undefined);

  initiateLoginFlow(): void {
    this.user$.subscribe((user) => {
      if (user) {
        this.currentUserSignal.set({
          username: user.displayName!,
          email: user.email!,
        });
      } else {
        this.currentUserSignal.set(null);
      }
    });
  }

  registerWithEmailAndPassword(
    username: string,
    email: string,
    password: string
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this._firebaseAuth,
      email,
      password
    ).then((response) =>
      updateProfile(response.user, { displayName: username })
    );

    return from(promise);
  }

  loginWithEmailAndPassword(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this._firebaseAuth,
      email,
      password
    ).then(() => {});

    return from(promise);
  }

  loginWithGoogle(): Observable<UserCredential> {
    const promise = this.loginWithPopup(new GoogleAuthProvider());
    return from(promise);
  }

  loginWithPopup(provider: AuthProvider): Promise<UserCredential> {
    return signInWithPopup(this._firebaseAuth, provider);
  }

  logout(): Observable<void> {
    const promise = signOut(this._firebaseAuth);
    this._router.navigateByUrl('/');
    return from(promise);
  }
}
