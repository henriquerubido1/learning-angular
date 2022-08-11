import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  
  onStartTimer(timer: number): void {
    setInterval(() => timer++, 1000);
  }

  onStartGame(timer: number): void {
    this.gameStarted.emit(this.onStartTimer(timer));
  }
}
