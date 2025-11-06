import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="login-container">
      <h2>🔐 Login Page</h2>

      <form (ngSubmit)="login()">
        <input type="text" [(ngModel)]="username" name="username" placeholder="Username" required />
        <input type="password" [(ngModel)]="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>

      <p *ngIf="error" class="error">{{ error }}</p>
    </div>
  `,
  styles: [`
    .login-container {
      text-align: center;
      margin-top: 50px;
      font-family: 'Poppins', sans-serif;
    }

    input {
      display: block;
      margin: 10px auto;
      padding: 8px;
      width: 200px;
    }

    button {
      background-color: #3f51b5;
      color: white;
      border: none;
      padding: 8px 20px;
      border-radius: 5px;
      cursor: pointer;
    }

    .error {
      color: red;
      margin-top: 10px;
    }
  `]
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.auth.login(this.username, this.password)) {
      this.router.navigate(['/books']);
    } else {
      this.error = 'Invalid username or password!';
    }
  }
}
