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
  constructor(private router: Router, private authService: AuthService) { }
  userObj: Ilogin = {
    email: '',
    password: '',
  }


  onLogin() {
    const rawForm = this.userObj;
    this.authService.login(rawForm.email, rawForm.password).subscribe({
      next: (response) => {
        console.log('Login response:', response);
        alert('Login successful!');
        this.router.navigateByUrl('home');
      },
      error: (err) => {
        console.error('Login error:', err);
        alert('Invalid credentials. Please try again.');
      }
    });

  }

}
