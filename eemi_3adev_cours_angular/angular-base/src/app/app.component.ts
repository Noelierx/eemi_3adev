import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
 title = 'angular-base';

 myNumber: number;
 myBool: boolean;
 myArray: any = [
   {
   title: 'test',
   nombre: 5
   },
   {
     title: 'chaussette',
     nombre: 10
   },
 ];
 
 myDate: string = '2018-09-19 16:39:00';
 myCurrency: number = 5.5;

 constructor() {}

 ngOnInit() {
   this.title = 'lala';
   setTimeout(() => {
     this.title = 'titi';
     this.myArray = null;
   }, 5000);
 }

 ngOnDestroy() {}
}

