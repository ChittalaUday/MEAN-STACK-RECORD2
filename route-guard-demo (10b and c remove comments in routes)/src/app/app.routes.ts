import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'books', component: BooksComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];


//10c lazy load add this


// import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { LoginComponent } from './login/login.component';
// import { authGuard } from './auth.guard';

// export const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'login', component: LoginComponent },

//   // ✅ Lazy loaded BooksComponent
//   {
//     path: 'books',
//     canActivate: [authGuard],
//     loadComponent: () =>
//       import('./books/books.component').then(m => m.BooksComponent)
//   },

//   { path: '**', redirectTo: '' }
// ];
