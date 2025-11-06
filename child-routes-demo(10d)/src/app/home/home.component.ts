import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container">
      <h2>🏠 Welcome to the Book Store</h2>
      <p>
        This is the Home Page. Use the navigation above to explore different sections.
      </p>

      <div class="buttons">
        <a routerLink="/books" class="btn">📚 Go to Books</a>
        <a routerLink="/login" class="btn">🔐 Login</a>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      text-align: center;
      padding: 40px;
      font-family: 'Poppins', sans-serif;
    }

    h2 {
      color: #3f51b5;
      font-size: 2rem;
      margin-bottom: 10px;
    }

    p {
      color: #555;
      font-size: 1rem;
      margin-bottom: 20px;
    }

    .buttons {
      display: flex;
      justify-content: center;
      gap: 15px;
    }

    .btn {
      background-color: #3f51b5;
      color: white;
      padding: 10px 20px;
      border-radius: 6px;
      text-decoration: none;
      transition: background 0.2s ease-in-out;
    }

    .btn:hover {
      background-color: #2c3e97;
    }
  `]
})
export class HomeComponent {}
