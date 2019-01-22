import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  articlesSidebar: any = [
    {
      id: 1,
      title: 'Article de sidebar',
      date: '2014',
      new: true
    },
    {
      id: 35,
      title: 'Nouvel article de sidebar',
      date: '2015',
      new: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
