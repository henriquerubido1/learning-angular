import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  // @Input() makes element accessible from
  // outside of the component
  // 'srvElement' is an optional alias for
  // the element
  @Input('srvElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
