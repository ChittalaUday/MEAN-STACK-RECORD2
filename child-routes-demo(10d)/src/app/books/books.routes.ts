import { Routes } from '@angular/router';
import { BooksHomeComponent } from './books-home/books-home.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';

export const booksRoutes: Routes = [
  {
    path: '',
    component: BooksHomeComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: BooksListComponent },
      { path: 'details/:id', component: BookDetailsComponent }
    ]
  }
];
