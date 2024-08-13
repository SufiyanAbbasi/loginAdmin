import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from '@angular/fire/auth';
import { from, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  firebaseAuth = inject(Auth)

  register(username: string, email: string, password: string): Observable<void> {
    return from(
      createUserWithEmailAndPassword(this.firebaseAuth, email, password)
        .then(response => {
          return updateProfile(response.user, { displayName: username });
        })
        .catch(error => {
          console.error('Registration error:', error);
          throw error; // Rethrow the error to be caught in the subscription
        })
    );
  }
  login(email: string, password: string) {
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password)
    return from(promise)
  }

  logout(): Observable<void> {
    return from(
      signOut(this.firebaseAuth)
        .catch(error => {
          console.error('Logout error:', error);
          throw error;
        })
    );
  }

}
