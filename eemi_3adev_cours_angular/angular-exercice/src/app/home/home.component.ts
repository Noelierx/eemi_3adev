import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: any = [
    {
      id: 1,
      title: 'Article de test',
      date: '2018',
      new: false
    },
    {
      id: 35,
      title: 'Nouvel article',
      date: '2019',
      new: true
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
