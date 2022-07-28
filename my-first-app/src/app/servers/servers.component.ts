import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // you can use template for using html in the component
  // or you can use templateUrl to load html from a file
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  // templateUrl: './servers.component.html',
  // the same thing happens for the css
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
  // styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
