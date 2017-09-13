import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IGreeterMessage } from '../models/IGreeterMessage';
@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  @Output() public onGreet: EventEmitter<IGreeterMessage> = new EventEmitter<IGreeterMessage>();

  constructor() { }

  ngOnInit() { }

  greet() {
    this.onGreet.emit({ what: 'hello', who: 'not redux'});
  }
}
