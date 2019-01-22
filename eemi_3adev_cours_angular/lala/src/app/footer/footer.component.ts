import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  playersFooter: any = [
    {
      id: 5,
      name: 'Lili',
      color: 'purple',
      level: 10
    },
    {
      id: 7,
      name: 'Titi',
      color: 'black',
      level: 15
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
