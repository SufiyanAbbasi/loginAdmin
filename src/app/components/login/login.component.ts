import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Ilogin } from '../../Models/Interface/ilogin';
import { AuthService } from '../../services/auth.service';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSignupMode = false;

  toggleSignupMode() {
    this.isSignupMode = !this.isSignupMode;
  }

  constructor(private router: Router, private authService: AuthService) { }
  userObj: Ilogin = {
    email: '',
    username: '',
    password: '',
  }


  onLogin() {
    const rawForm = this.userObj;
    this.authService.login(rawForm.email, rawForm.password).subscribe({
      next: (response) => {
        console.log('Login response:', response);
        alert('Login successful!');

        localStorage.setItem('loggedInUser', JSON.stringify({
          email: response.user.email,
          username: response.user.displayName, // Store the username
        }));
  

        this.router.navigateByUrl('dashboard');
      },
      error: (err) => {
        console.error('Login error:', err);
        alert('Invalid credentials. Please try again.');
      }
    });

  }

  onSignup() {
    const rawForm = this.userObj;
    this.authService.register(rawForm.username, rawForm.email, rawForm.password).subscribe({
        next: () => {
            alert('Registration Successful');
            this.router.navigateByUrl('dashboard');
        },
        error: (err) => {
            console.error('Registration failed:', err);
            alert('Registration failed. Please try again.');
        }
    });
}

}
