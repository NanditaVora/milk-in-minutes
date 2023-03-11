import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  // ordersURL: string = "http://localhost:3000/orders";
  private ordersURL = environment.ordersURL;
  constructor(private http: HttpClient) {}

  add(order: Order): Observable<Order> {
    return this.http.post<Order>(this.ordersURL, order);
  }

  getAllOrders(): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(this.ordersURL);
  }
}
