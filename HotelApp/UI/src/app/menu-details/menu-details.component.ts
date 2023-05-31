import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../menu.service';
import { MenuItem } from '../models/menu-item.model';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
  menuItem: MenuItem[]=[];

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.menuService.getMenuItem(id)
      .subscribe(item => this.menuItem = item);
  }

  addToCart(item: MenuItem) {
    this.menuService.addToCart(item);
  }
}
