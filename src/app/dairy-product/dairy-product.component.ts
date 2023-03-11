import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-dairy-product',
  templateUrl: './dairy-product.component.html',
  styleUrls: ['./dairy-product.component.css']
})
export class DairyProductComponent implements OnInit {

  @Input()
  product!: Product
  constructor() { }

  ngOnInit(): void {
  }

}
