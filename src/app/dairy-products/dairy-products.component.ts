import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-dairy-products',
  templateUrl: './dairy-products.component.html',
  styleUrls: ['./dairy-products.component.css']
})
export class DairyProductsComponent implements OnInit {

  category: string = "";
  products: Product[] = [];
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(queryParam => {
      this.category = queryParam.get("category")?.toUpperCase() ?? "All";
      this.productService.getProductByCategory(this.category).subscribe({
        next: data => {
          this.products = data;
        },
        error: e => {
          alert("Network Error !! Please Try Again Later");
        }
      });
    });
  }

  onSearchTextChanged(productName: string) {
    this.productService.getProducts().subscribe({
      next: data => {
        this.products = data.filter(product=>product.productName.toUpperCase().includes(productName.toUpperCase()));
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    })
  }
}

