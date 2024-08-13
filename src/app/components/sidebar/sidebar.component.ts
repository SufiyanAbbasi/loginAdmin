import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDesktop, faShoppingCart, faStore, faBell, faChartBar, faPhotoVideo, faUsers, faCar, faEnvelope, faCogs, faUser, faSignOutAlt, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


interface SidebarItem {
    title: string;
    icon: string;
    route?: string;
    sublist?: SidebarItem[];
}
@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

    faDesktop = faDesktop;
    faShoppingCart = faShoppingCart;
    faStore = faStore;
    faBell = faBell;
    faChartBar = faChartBar;
    faPhotoVideo = faPhotoVideo;
    faUsers = faUsers;
    faCar = faCar;
    faEnvelope = faEnvelope;
    faCogs = faCogs;
    faUser = faUser;
    faSignOutAlt = faSignOutAlt;
    faChevronRight = faChevronRight;
    faChevronDown = faChevronDown;
    constructor(private router: Router){}

    sidebarItems = [
        { list: 'Dashboard', icon: this.faDesktop, route: 'dashboard' },
        { list: 'Orders', icon: this.faShoppingCart, route: 'orders' },
        { 
          list: 'Product Manager', 
          icon: this.faStore, 
          route: '/product-manager',
          isOpen: false,
          sublist: [
            { list: 'Services', route: '/product-manager/services' },
            { list: 'Variants', route: '/product-manager/variants' },
            { list: 'Products', route: '/product-manager/products' },
            { list: 'Coupons', route: '/product-manager/coupons' }
          ]
        },
        { list: 'Notification', icon: this.faBell, route: '/notification' },
        { list: 'Reports', icon: this.faChartBar, route: '/reports' },
        { list: 'App Banners', icon: this.faPhotoVideo, route: '/app-banners' },
        { list: 'Customers', icon: this.faUsers, route: '/customers' },
        { list: 'Driver', icon: this.faCar, route: '/driver' },
        { list: 'Contact', icon: this.faEnvelope, route: '/contact' },
        { list: 'Admin', icon: this.faCogs, route: '/admin' },
        { 
          list: 'Settings', 
          icon: this.faCogs, 
          route: '/settings',
          isOpen: false,
          sublist: [
            { list: 'Privacy Policy', route: '/settings/privacy-policy' },
            { list: 'Terms of Service', route: '/settings/terms-of-service' },
            { list: 'Contact', route: '/settings/contact' },
            { list: 'About Us', route: '/settings/about-us' }
          ]
        },
        { list: 'Profile', icon: this.faUser, route: '/profile' },
        { list: 'Logout', icon: this.faSignOutAlt, route: '/logout' }
      ];



    toggleSublist(item: any) {
        if (!item.hasOwnProperty('isOpen')) {
            item.isOpen = false;
        }
        item.isOpen = !item.isOpen;
    }

    navigate(route: string) {
        // Use Angular Router to navigate
        this.router.navigate([route]);
        console.log(`Navigating to ${route}`);
    }

}

