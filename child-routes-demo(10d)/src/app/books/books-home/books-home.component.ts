import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="books-container">
      <h1>📚 Books Collection</h1>
      <nav class="subnav">
        <a routerLink="list" routerLinkActive="active" class="nav-link">
          📖 All Books
        </a>
        <a routerLink="details/1" routerLinkActive="active" class="nav-link">
          ℹ️ Featured Book
        </a>
      </nav>

      <div class="content-area">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .books-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .books-header {
      text-align: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 2px solid #eee;
    }

    .books-header h2 {
      color: #2c3e50;
      margin-bottom: 10px;
    }

    .books-header p {
      color: #7f8c8d;
      font-size: 1.1em;
    }

    .subnav {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 30px;
      padding: 15px;
      background-color: #f8f9fa;
      border-radius: 8px;
    }

    .nav-link {
      color: #3498db;
      text-decoration: none;
      font-weight: 600;
      padding: 10px 20px;
      border-radius: 5px;
      transition: all 0.3s ease;
    }

    .nav-link:hover {
      background-color: #e3f2fd;
      transform: translateY(-2px);
    }

    .active {
      background-color: #3498db;
      color: white;
    }

    .content-area {
      min-height: 400px;
    }
  `]
})
export class BooksHomeComponent {}
