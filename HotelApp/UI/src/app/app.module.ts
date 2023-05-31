import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
import { CartComponent } from './cart/cart.component';
import { MenuService } from './menu.service';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuDetailsComponent,
    MenuFormComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MenuComponent },
      { path: 'menu/:id', component: MenuDetailsComponent },
      { path: 'edit/:id', component: MenuFormComponent },
      { path: 'cart', component: CartComponent }
    ])
  ],
  providers: [MenuService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
