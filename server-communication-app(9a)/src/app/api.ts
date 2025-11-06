import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://openlibrary.org/subjects/fantasy.json?limit=5';
  // 📘 Public OpenLibrary API for sample books

  constructor(private http: HttpClient) {}

  // Fetch book list
  getBooks(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
