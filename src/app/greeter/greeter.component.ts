import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IGreeterMessage } from '../models/IGreeterMessage';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent {

  @Input() public message: string;
  @Output() public onGreet: EventEmitter<IGreeterMessage> = new EventEmitter<IGreeterMessage>();

  constructor() { }

  greet() {
    this.onGreet.emit({ what: 'hello', who: 'redux' } );
  }
}
