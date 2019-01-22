import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'coarticles';

  isLoading: boolean = false;

  monTableau: any = [
    {
      id: 5,
      title: 'Test',
      text: 'dff dfgj dghjdg hj dghjd'
    },
    {
      id: 7,
      title: 'Test 2',
      text: 'df fhghjrjk rhjkwgqdfgsfgfdgjdg j'
    }
  ];

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
