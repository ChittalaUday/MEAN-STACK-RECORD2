import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>📚 Book Store</h1>
      <p class="subtitle">Fetched live using Angular HttpClient</p>

      <div class="book-list" *ngIf="books.length > 0; else loading">
        <div class="book-card" *ngFor="let book of books">
          <img [src]="getCover(book.cover_id)" alt="Book Cover" />
          <h3>{{ book.title }}</h3>
          <p><strong>Author:</strong> {{ book.authors?.[0]?.name || 'Unknown' }}</p>
          <p><strong>First Published:</strong> {{ book.first_publish_year }}</p>
        </div>
      </div>

      <ng-template #loading>
        <p>Loading book details...</p>
      </ng-template>
      <div>
        <h1>Developed by 23MH5A0505</h1>
      </div>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
      padding: 20px;
      font-family: 'Poppins', sans-serif;
      background-color: #f9f9fb;
      min-height: 100vh;
    }

    h1 {
      color: #3f51b5;
      font-size: 2.2rem;
      margin-bottom: 0.3rem;
    }

    .subtitle {
      color: #555;
      margin-bottom: 2rem;
      font-style: italic;
    }

    .book-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
      justify-content: center;
      padding: 0 20px;
    }

    .book-card {
      background: white;
      border-radius: 10px;
      padding: 15px;
      box-shadow: 0 3px 8px rgba(0,0,0,0.1);
      transition: transform 0.2s ease-in-out;
    }

    .book-card:hover {
      transform: scale(1.03);
    }

    .book-card img {
      width: 100%;
      height: 280px;
      object-fit: cover;
      border-radius: 6px;
      margin-bottom: 10px;
    }

    .book-card h3 {
      color: #222;
      font-size: 1.1rem;
      margin: 8px 0;
    }

    .book-card p {
      color: #555;
      font-size: 0.9rem;
      margin: 2px 0;
    }
  `]
})
export class AppComponent implements OnInit {
  books: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getBooks().subscribe({
      next: (data) => this.books = data.works,
      error: (err) => console.error('Error fetching books:', err)
    });
  }

  getCover(id: number): string {
    return id ? `https://covers.openlibrary.org/b/id/${id}-L.jpg`
              : 'https://via.placeholder.com/150x220?text=No+Cover';
  }
}
