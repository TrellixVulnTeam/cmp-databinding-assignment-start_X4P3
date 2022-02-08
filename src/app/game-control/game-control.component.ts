import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameControlComponent implements OnInit {
  counter: number = 0;
  interval: NodeJS.Timeout;
  @Output() onTimeout = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  
  onStartGame() {
    this.interval = setInterval(() => {this.onTimeoutFunction()}, 1000);
  }

  onStopGame() {
    clearInterval(this.interval);
  }

  onTimeoutFunction() {
    this.counter ++;
    this.onTimeout.emit(this.counter);
  }
}

