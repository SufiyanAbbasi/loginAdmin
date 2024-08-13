// sidebar.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private sidebarVisibilitySubject = new BehaviorSubject<boolean>(true); // Default state is true
  sidebarVisibility$ = this.sidebarVisibilitySubject.asObservable();

  toggleSidebar() {
    this.sidebarVisibilitySubject.next(!this.sidebarVisibilitySubject.value);
  }

  setSidebarVisibility(visible: boolean) {
    this.sidebarVisibilitySubject.next(visible);
  }
}