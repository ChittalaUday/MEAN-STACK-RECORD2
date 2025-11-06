import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="book-details-container" *ngIf="book">
      <div class="book-header">
        <h3>{{ book.title }}</h3>
        <p class="author">by {{ book.author }}</p>
      </div>

      <div class="book-content">
        <div class="book-info">
          <div class="info-row">
            <span class="label">Price:</span>
            <span class="value price">₹{{ book.price }}</span>
          </div>

          <div class="info-row">
            <span class="label">ISBN:</span>
            <span class="value">{{ book.isbn }}</span>
          </div>

          <div class="info-row">
            <span class="label">Published:</span>
            <span class="value">{{ book.publishedYear }}</span>
          </div>

          <div class="info-row">
            <span class="label">Genre:</span>
            <span class="value genre">{{ book.genre }}</span>
          </div>

          <div class="description">
            <h4>Description</h4>
            <p>{{ book.description }}</p>
          </div>
        </div>
      </div>

      <div class="actions">
        <button class="back-btn" (click)="goBack()">← Back to Books</button>
        <button class="buy-btn">Buy Now</button>
      </div>
    </div>

    <div class="not-found" *ngIf="!book">
      <h3>Book Not Found</h3>
      <p>The requested book could not be found.</p>
      <button class="back-btn" (click)="goBack()">← Back to Books</button>
    </div>
  `,
  styles: [`
    .book-details-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .book-header {
      text-align: center;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
    }

    .book-header h3 {
      color: #2c3e50;
      margin: 0 0 10px 0;
      font-size: 2em;
    }

    .author {
      color: #7f8c8d;
      font-size: 1.2em;
      font-style: italic;
    }

    .book-content {
      margin-bottom: 30px;
    }

    .info-row {
      display: flex;
      margin-bottom: 15px;
      padding: 10px;
      border-bottom: 1px solid #f5f5f5;
    }

    .label {
      font-weight: bold;
      width: 120px;
      color: #2c3e50;
    }

    .value {
      flex: 1;
      color: #34495e;
    }

    .price {
      color: #27ae60;
      font-size: 1.3em;
      font-weight: bold;
    }

    .genre {
      background-color: #e3f2fd;
      padding: 4px 12px;
      border-radius: 15px;
      color: #3498db;
    }

    .description {
      margin-top: 25px;
    }

    .description h4 {
      color: #2c3e50;
      margin-bottom: 10px;
    }

    .description p {
      line-height: 1.6;
      color: #34495e;
    }

    .actions {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
      border-top: 1px solid #eee;
    }

    .back-btn, .buy-btn {
      padding: 12px 25px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s ease;
    }

    .back-btn {
      background-color: #95a5a6;
      color: white;
    }

    .back-btn:hover {
      background-color: #7f8c8d;
    }

    .buy-btn {
      background-color: #27ae60;
      color: white;
    }

    .buy-btn:hover {
      background-color: #229954;
      transform: translateY(-2px);
    }

    .not-found {
      text-align: center;
      padding: 40px;
      color: #7f8c8d;
    }

    .not-found h3 {
      color: #e74c3c;
      margin-bottom: 15px;
    }
  `]
})
export class BookDetailsComponent implements OnInit {
  book: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.book = this.bookService.getBookById(id);
  }

  goBack(): void {
    this.router.navigate(['/books/list']);
  }
}
