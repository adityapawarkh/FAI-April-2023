
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { MenuItem } from '../models/menu-item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: MenuItem[]=[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  calculateTotal() {
    return this.cartService.calculateTotal();
  }

  generateBill() {
    const bill = this.cartService.generateBill();
    console.log(bill); // Display the bill in the console or implement further logic
  }
}

