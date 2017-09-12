import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IGreeterMessage } from '../store/hello-redux-reducer';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreeterComponent {

  @Input() public loading: boolean;
  @Input() public message: IGreeterMessage;
  @Output() public onGreet: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  greet() {
    this.onGreet.emit();
  }

  magic() {
    this.message.who = 'Dexter';
  }
}
