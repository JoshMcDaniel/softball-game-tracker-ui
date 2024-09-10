import { Component, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../shared/services/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  authService = inject(AuthService);
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);

  private _unsubscribe = new Subject<void>();

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  errorMessage: string | null = null;

  onSubmit(): void {
    this.errorMessage = null;
    const rawForm = this.form.getRawValue();
    this.authService
      .loginWithEmailAndPassword(rawForm.email, rawForm.password)
      .pipe(
        takeUntil(this._unsubscribe),
        switchMap(() => this.authService.user$)
      )
      .subscribe({
        next: (user) => this.handleSuccessfulLogin(user),
        error: (err) => (this.errorMessage = err.code),
      });
  }

  loginWithGoogle(): void {
    this.errorMessage = null;
    this.authService
      .loginWithGoogle()
      .pipe(
        takeUntil(this._unsubscribe),
        switchMap(() => this.authService.user$)
      )
      .subscribe({
        next: (user) => this.handleSuccessfulLogin(user),
        error: (err) => (this.errorMessage = err.code),
      });
  }

  handleSuccessfulLogin(user: User | null): void {
    if (user) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }
}
