import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Order {
  orderId: number;
  orderBy: string;
  orderAt: string;
  pickupDate: string;
  deliveryDate: string;
  amount: number;
  orderStatus: string;
}
@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders: Order[] = [
    { orderId: 1, orderBy: 'John Doe', orderAt: '2024-01-01', pickupDate: '2024-01-02', deliveryDate: '2024-01-03', amount: 100.5, orderStatus: 'Delivered' },
    { orderId: 2, orderBy: 'Jane Smith', orderAt: '2024-01-04', pickupDate: '2024-01-05', deliveryDate: '2024-01-06', amount: 200.0, orderStatus: 'Pending' },
    { orderId: 3, orderBy: 'Bob Johnson', orderAt: '2024-01-07', pickupDate: '2024-01-08', deliveryDate: '2024-01-09', amount: 150.25, orderStatus: 'Cancelled' },
    { orderId: 4, orderBy: 'Bob Johnson', orderAt: '2024-01-07', pickupDate: '2024-01-08', deliveryDate: '2024-01-09', amount: 150.25, orderStatus: 'Cancelled' },
    { orderId: 5, orderBy: 'Bob Johnson', orderAt: '2024-01-07', pickupDate: '2024-01-08', deliveryDate: '2024-01-09', amount: 150.25, orderStatus: 'Cancelled' },
    { orderId: 6, orderBy: 'Bob Johnson', orderAt: '2024-01-07', pickupDate: '2024-01-08', deliveryDate: '2024-01-09', amount: 150.25, orderStatus: 'Cancelled' },
    // Add 17 more entries here...
  ];
  filteredOrders: Order[] = [];
  entriesToShow: number = 3;
  searchQuery: string = '';

  constructor() {
    this.updateFilteredOrders();
  }

  onEntriesChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.entriesToShow = Number(target.value);
    this.updateFilteredOrders();
  }

  onSearchChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchQuery = target.value.toLowerCase();
    this.updateFilteredOrders();
  }
  updateFilteredOrders() {
    const filtered = this.orders.filter(order => {
      return (
        order.orderBy.toLowerCase().includes(this.searchQuery) ||
        order.orderStatus.toLowerCase().includes(this.searchQuery) ||
        order.orderId.toString().includes(this.searchQuery)
      );
    });
    this.filteredOrders = filtered.slice(0, this.entriesToShow);
  }

  deleteOrder(orderId: number) {
    console.log(`Delete order with id ${orderId}`);
    // Implement delete logic here
  }
}
