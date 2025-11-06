import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private jsonUrl = '/assets/products.json';

  constructor(private http: HttpClient) {}

  // Method to fetch products
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
