import { Component } from '@angular/core';
import { GroceryService } from '../service/grocery.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
grocerylist
  constructor(private grocery: GroceryService) {

    this.grocerylist = this.grocery.getItem()
  }
  
ngOnClick() {

  
}
}
