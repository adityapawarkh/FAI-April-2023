import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { MenuItem } from '../models/menu.model';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {
  menuItem: MenuItem = new MenuItem();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuService: MenuService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.menuService.getMenuItem(id)
        .subscribe(item => this.menuItem = item);
    }
  }

  onSubmit() {
    if (this.menuItem.id) {
      this.menuService.updateMenuItem(this.menuItem)
        .subscribe(() => this.router.navigateByUrl('/'));
    } else {
      this.menuService.addMenuItem(this.menuItem)
        .subscribe(() => this.router.navigateByUrl('/'));
    }
  }
}
