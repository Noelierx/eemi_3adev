import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  playersHome: any = [
    {
      id: 1,
      name: 'Test',
      color: 'red',
      level: 3
    },
    {
      id: 3,
      name: 'Lala',
      color: '#333',
      level: 5
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
