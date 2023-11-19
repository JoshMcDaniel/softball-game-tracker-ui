import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDMGYYNucmuPkOUXUD1jOelTFc5iWQd1QA',
  authDomain: 'softballgametrackerui.firebaseapp.com',
  projectId: 'softballgametrackerui',
  storageBucket: 'softballgametrackerui.appspot.com',
  messagingSenderId: '1054208583100',
  appId: '1:1054208583100:web:9585350863a26727b9b7b9',
  measurementId: 'G-SZQG8J379Y',
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(this.app);
}
