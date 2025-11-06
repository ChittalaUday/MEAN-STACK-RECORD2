import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>🛍️ Product Store (From API)</h2>
      <p>Developed by 23MH5A0505</p>

      <div class="grid" *ngIf="products.length > 0; else loading">
        <div class="card" *ngFor="let product of products">
          <img [src]="product.image" alt="{{ product.title }}" />
          <h3>{{ product.title }}</h3>
          <p class="category">Category: {{ product.category }}</p>
          <p class="price">💰 ₹{{ product.price * 85 | number:'1.0-2' }}</p>
        </div>
      </div>

      <ng-template #loading>
        <p>Loading products from API...</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .container {
      font-family: 'Poppins', sans-serif;
      text-align: center;
      background-color: #f4f6f9;
      min-height: 100vh;
      padding: 20px;
    }

    h2 {
      color: #3f51b5;
      font-size: 2rem;
      margin-bottom: 20px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      padding: 10px;
    }

    .card {
      background: white;
      border-radius: 10px;
      padding: 15px;
      box-shadow: 0 3px 8px rgba(0,0,0,0.1);
      transition: transform 0.2s ease-in-out;
    }

    .card:hover {
      transform: scale(1.05);
    }

    .card img {
      width: 100%;
      height: 180px;
      object-fit: contain;
      margin-bottom: 10px;
    }

    .price {
      color: #2e7d32;
      font-weight: bold;
    }

    .category {
      color: #757575;
      font-size: 0.9rem;
    }
  `]
})
export class AppComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Error fetching products:', err)
    });
  }
}
