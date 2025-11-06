import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">🏠 Home</a>
      <a routerLink="/books" routerLinkActive="active">📚 Books</a>
      <a routerLink="/login" routerLinkActive="active">🔐 Login</a>
    </nav>
    <div><h1>Developed by 23MH5A0505</h1></div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: center;
      gap: 20px;
      background-color: #3f51b5;
      padding: 10px;
    }
    a {
      color: white;
      text-decoration: none;
      font-weight: 600;
    }
    .active {
      text-decoration: underline;
    }
  `]
})
export class AppComponent {}
