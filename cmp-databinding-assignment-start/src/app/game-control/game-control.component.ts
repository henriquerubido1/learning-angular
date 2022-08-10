import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    setInterval(() => this.timer++, 1000);
    setInterval(() => console.log(this.timer), 1000);
  }
}
