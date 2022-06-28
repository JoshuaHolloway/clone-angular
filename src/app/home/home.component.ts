import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  clicked = false;

  elems = [
    { name: 'josh', color: 'blue', size: 'big' },
    { name: 'steve', color: 'green', size: 'small' },
  ];

  handleClick() {
    this.clicked = true;
  }
}
