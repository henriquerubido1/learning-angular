import { Component, OnInit } from '@angular/core';

@Component({
  // you can use selector to select the element in the html file
  // or you can use selector with [] to use the element in another
  // html tag
  // you can also use a class to select the element
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',

  // you can use template for using html in the component
  // or you can use templateUrl to load html from a file
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  
  // the same thing happens for the css
  styles: [`
    h3 {
      color: dodgerblue;
    }
  `]
  // styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!' ;
  serverName = 'Test server';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
