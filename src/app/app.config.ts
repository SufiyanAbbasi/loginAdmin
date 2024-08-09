import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2FU-iKd8TpZZ9t6MlxqZ-TLJbbeU7tHI",
  authDomain: "admin-login-41660.firebaseapp.com",
  projectId: "admin-login-41660",
  storageBucket: "admin-login-41660.appspot.com",
  messagingSenderId: "379366954389",
  appId: "1:379366954389:web:b36061a75c54ebeee4929c"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};
