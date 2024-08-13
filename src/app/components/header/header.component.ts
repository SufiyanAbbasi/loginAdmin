import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  loggedInUser: any;

  authService = inject(AuthService)

  ngOnInit() {
    const storedData = localStorage.getItem('loggedInUser');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this.loggedInUser = parsedData.username; // Fetch and assign the username
      console.log('Logged in user:', this.loggedInUser);
    }
  }



}



