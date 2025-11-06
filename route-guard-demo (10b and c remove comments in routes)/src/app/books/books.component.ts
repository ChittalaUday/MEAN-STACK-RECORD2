import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>📚 Books Page</h2>
      <p>Welcome! You are logged in.</p>

      <div class="book-list">
        <div class="book-card" *ngFor="let book of books">
          <img [src]="book.image" alt="{{ book.title }}" />
          <h3>{{ book.title }}</h3>
          <p><strong>Author:</strong> {{ book.author }}</p>
          <p class="price">💰 ₹{{ book.price }}</p>
        </div>
      </div>

      <button class="logout" (click)="logout()">Logout</button>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
      margin: 30px;
      font-family: 'Poppins', sans-serif;
    }

    h2 {
      color: #3f51b5;
      font-size: 2rem;
      margin-bottom: 10px;
    }

    .book-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      margin: 30px 0;
      padding: 0 20px;
    }

    .book-card {
      background: white;
      border-radius: 10px;
      box-shadow: 0 3px 8px rgba(0,0,0,0.1);
      padding: 15px;
      transition: transform 0.2s ease-in-out;
    }

    .book-card:hover {
      transform: scale(1.03);
    }

    .book-card img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 5px;
      margin-bottom: 10px;
    }

    .book-card h3 {
      margin: 5px 0;
      color: #333;
    }

    .book-card p {
      margin: 3px 0;
      color: #555;
    }

    .price {
      color: #2e7d32;
      font-weight: bold;
    }

    .logout {
      background: crimson;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      margin-top: 20px;
    }
  `]
})
export class BooksComponent {
  books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 499,
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 399,
      image: 'https://images.unsplash.com/photo-1526318472351-bc6fa96c2f0a?auto=format&fit=crop&w=400&q=80'
    },
    {
      title: '1984',
      author: 'George Orwell',
      price: 450,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      price: 299,
      image: 'https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&w=400&q=80'
    }
  ];

  constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
