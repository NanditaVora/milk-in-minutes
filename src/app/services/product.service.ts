import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private productURL = "http://localhost:3000/products";
  private productURL = environment.productURL;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Array<Product>> {
    console.log(this.productURL);
    return this.http.get<Array<Product>>(`${this.productURL}`);
  }

  getProductByCategory(category: string): Observable<Array<Product>> {
    console.log(this.productURL);
    if (category === 'All') return this.getProducts();
    return this.http.get<Array<Product>>(
      `${this.productURL}?category=${category.toLowerCase()}`
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productURL}/${id}`);
  }
}

// 7777031159
