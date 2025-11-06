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
    <hr />
    <router-outlet></router-outlet>
  `,
  styles: [`
    .navbar {
      background: #3f51b5;
      padding: 15px;
      display: flex;
      justify-content: center;
      gap: 20px;
    }
    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
    .active {
      text-decoration: underline;
    }
  `]
})
export class AppComponent {}
