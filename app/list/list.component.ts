import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  clicked = false;
  list = new Array(5).fill(4).map((item, index) => index + 1);

  constructor() {}

  ngOnInit() {}
  click() {
    this.clicked = !this.clicked;
    console.log(this.clicked);
  }
}
