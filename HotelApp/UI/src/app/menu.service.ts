import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../models/menu-item.model';

@Injectable()
export class MenuService {
  private apiUrl = 'http://localhost:5000/api/hotel/menu';

  constructor(private http: HttpClient) { }

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.apiUrl);
  }

  getMenuItem(id: number): Observable<MenuItem> {
    return this.http.get<MenuItem>(`${this.apiUrl}/${id}`);
  }

  addMenuItem(item: MenuItem): Observable<MenuItem> {
    return this.http.post<MenuItem>(this.apiUrl, item);
  }

  updateMenuItem(item: MenuItem): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${item.id}`, item);
  }

  addToCart(item: MenuItem): void {
    // Implement the logic to add the item to the cart (using CartService)
  }
}

