import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems: any[] = [];
  checkout() {
    throw new Error('Method not implemented.');
  }
  getTotalPrice() {
    throw new Error('Method not implemented.');
  }
  getTotalItems() {
    throw new Error('Method not implemented.');
  }
  removeItem(_t7: any) {
    throw new Error('Method not implemented.');
  }
  increaseQuantity(_t7: any) {
    throw new Error('Method not implemented.');
  }
  decreaseQuantity(_t7: any) {
    throw new Error('Method not implemented.');
  }

}
