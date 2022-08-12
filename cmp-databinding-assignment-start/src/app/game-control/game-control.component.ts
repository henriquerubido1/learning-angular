import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Input() count: number;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.count = 0;
    setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
}
