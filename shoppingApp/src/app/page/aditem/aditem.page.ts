import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aditem',
  templateUrl: './aditem.page.html',
  styleUrls: ['./aditem.page.scss'],
})
export class AditemPage implements OnInit {
Item = {
  name: '',
  price: '0',
  type: ''
};
  constructor() { }

  ngOnInit() {
  }

}
