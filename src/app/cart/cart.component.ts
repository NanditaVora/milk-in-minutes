import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../models/order';
import { Product } from '../models/product';
import { OrderService } from '../services/order.service';
import { ProductService } from '../services/product.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product!: Product;

  order: Order = {
    firstName:"",
    address: "",
    productName: "",
    city: "",
    contact: "",
    deliveryDate: new Date(),
    email: "",
    lastName: "",
    postalCode: "",
    quantity: 1,
    state: ""
  } ;

  minDate:Date=new Date();

  constructor(private activatedRoute: ActivatedRoute, 
    private productService: ProductService, 
    private orderService: OrderService,
    private snackBar: MatSnackBar,
    private router: RouterService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.productService.getProduct(+id).subscribe({
        next: data => {
          this.product = data;
        },
        error: e => {
          alert("Network Error !! Please Try Again Later");
        }
      });
    });
  }

  onSubmit() {
    this.order!.productName = this.product.productName;
    this.orderService.add(this.order!).subscribe({
      next: data => {
        this.snackBar.open('Order Request Submitted Successfully!! You will soon hear from us', 'success', {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
        // this.submitStatus = true;
        this.router.navigateToHomeView();
      },
      error: (e) => {
        console.log(e);
        this.snackBar.open("Failed to Submit Order Request!! Please Try Again Later", "failure", {
          duration: 5000,
          panelClass: ['mat-toolbar', 'mat-primary']
        });
      }
    });
  }

}
