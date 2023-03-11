import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  productName: string = "";
  
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
  constructor(private router: RouterService) { }

  ngOnInit(): void {
  }

  search() {    
    console.log(this.productName);
    this.searchTextChanged.emit(this.productName);
  }

}
