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
      <a routerLink="products" routerLinkActive="active">🛍️ Products</a>
      <a routerLink="about" routerLinkActive="active">ℹ️ About</a>
    </nav>

    <main class="content">
      <router-outlet></router-outlet>
    </main>
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
    .content {
      padding: 20px;
      text-align: center;
      font-family: 'Poppins', sans-serif;
    }
  `]
})
export class AppComponent {}
