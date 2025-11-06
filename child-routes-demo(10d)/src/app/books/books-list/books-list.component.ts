import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="books-list-container">
      <h3>📖 Our Book Collection</h3>
      <div class="books-grid">
        <div
          *ngFor="let book of books"
          class="book-card"
          (click)="viewBookDetails(book.id)"
        >
          <div class="book-info">
            <h4>{{ book.title }}</h4>
            <p class="author">by {{ book.author }}</p>
            <p class="price">₹{{ book.price }}</p>
            <p class="genre">{{ book.genre }}</p>
            <button class="details-btn" (click)="viewBookDetails(book.id); $event.stopPropagation()">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .books-list-container {
      padding: 20px;
    }

    .books-list-container h3 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 30px;
    }

    .books-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 25px;
    }

    .book-card {
      border: 1px solid #e0e0e0;
      border-radius: 10px;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .book-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.15);
      border-color: #3498db;
    }

    .book-info h4 {
      color: #2c3e50;
      margin: 0 0 10px 0;
      font-size: 1.3em;
    }

    .author {
      color: #7f8c8d;
      font-style: italic;
      margin: 5px 0;
    }

    .price {
      color: #27ae60;
      font-weight: bold;
      font-size: 1.2em;
      margin: 10px 0;
    }

    .genre {
      color: #3498db;
      background-color: #e3f2fd;
      display: inline-block;
      padding: 4px 10px;
      border-radius: 15px;
      font-size: 0.85em;
      margin: 10px 0;
    }

    .details-btn {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s;
      width: 100%;
      margin-top: 15px;
    }

    .details-btn:hover {
      background-color: #2980b9;
    }
  `]
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  viewBookDetails(id: number): void {
    this.router.navigate(['/books/details', id]);
  }
}
