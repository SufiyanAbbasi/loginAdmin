import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { from, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  firebaseAuth = inject(Auth)

  login(email:string, password:string){
   const promise = signInWithEmailAndPassword(this.firebaseAuth,email,password)
   return from(promise)
  }

}
