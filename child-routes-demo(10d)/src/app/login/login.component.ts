import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <h2>🔐 Login Page</h2>

      <form (ngSubmit)="login()">
        <input
          type="text"
          [(ngModel)]="username"
          name="username"
          placeholder="Enter username"
          required
        />
        <input
          type="password"
          [(ngModel)]="password"
          name="password"
          placeholder="Enter password"
          required
        />
        <button type="submit">Login</button>
      </form>

      <p *ngIf="error" class="error">{{ error }}</p>
    </div>
  `,
  styles: [`
    .login-container {
      text-align: center;
      padding: 40px;
      font-family: 'Poppins', sans-serif;
    }

    h2 {
      color: #3f51b5;
      font-size: 2rem;
      margin-bottom: 20px;
    }

    input {
      display: block;
      width: 240px;
      margin: 10px auto;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 1rem;
    }

    button {
      background-color: #3f51b5;
      color: white;
      border: none;
      padding: 8px 20px;
      border-radius: 6px;
      cursor: pointer;
      margin-top: 10px;
      font-size: 1rem;
    }

    .error {
      color: red;
      margin-top: 10px;
      font-size: 0.95rem;
    }
  `]
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    // simple demo login
    if (this.username === 'admin' && this.password === '1234') {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/books']);
    } else {
      this.error = 'Invalid username or password!';
    }
  }
}
