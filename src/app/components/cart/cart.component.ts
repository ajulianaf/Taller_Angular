import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styles: [`
    .card {
      transition: transform 0.2s;
    }
    .card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
  `]
})
export class CartComponent {
  cartItems: (Product & { quantity: number })[] = [
    {
      id: 1,
      name: 'Licor de Rosas',
      description: 'Delicado y aromático. Ideal para regalar.',
      price: 89.99,
      imageUrl: 'assets/img/producto1.jpg',
      quantity: 1
    }
  ];
  shipping: number = 10;

  updateQuantity(item: Product & { quantity: number }, change: number): void {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      item.quantity = newQuantity;
    }
  }

  removeItem(item: Product & { quantity: number }): void {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
  }

  getSubtotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getTotal(): number {
    return this.getSubtotal() + this.shipping;
  }

  checkout(): void {
    alert('¡Gracias por tu compra!');
    this.cartItems = [];
  }
}
