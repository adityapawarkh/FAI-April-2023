import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { MenuItem } from '../models/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[]=[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems() {
    this.menuService.getMenuItems()
      .subscribe(items => this.menuItems = items);
  }

  addToCart(item: MenuItem) {
    this.menuService.addToCart(item);
  }
}

