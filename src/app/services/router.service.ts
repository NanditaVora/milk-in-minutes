import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  navigateToHomeView() {
    this.router.navigateByUrl("");
  }

  navigateToDairyProductsView() {
    this.router.navigateByUrl("/dairy-products");
  }
}
