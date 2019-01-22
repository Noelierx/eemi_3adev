import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnChanges {
    
  @Input() list: any;

  constructor() { }

  ngOnInit() {
      console.log(this.list);
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log(changes);
  }
  
  clickP(e) {
      console.log(e);
  }
    
}
