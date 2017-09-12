import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent {

  @Input() public message: string;
  @Output() public onGreet: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  greet() {
    this.onGreet.emit('hello redux');
  }
}
