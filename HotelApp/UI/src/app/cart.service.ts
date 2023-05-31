import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Injectable()
export class CartService {
  private cartItems: MenuItem[] = [];

  getCartItems(): MenuItem[] {
    return this.cartItems;
  }

  calculateTotal(): number {
    // Implement the logic to calculate the total bill amount
    return 0;
  }

  generateBill(): any {
    // Implement the logic to generate the bill (e.g., create an object with bill details)
    return null;
  }
}

