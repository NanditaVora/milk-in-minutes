import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories : string[] = [
    "Milk",
    "Butter",
    "ButterMilk",
    "Cheese",
    "Paneer",
    "Ghee",
    "Curd",
    "Yogurt"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
