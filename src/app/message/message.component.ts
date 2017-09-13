import { Component, OnInit, Input } from '@angular/core';
import { IGreeterMessage } from '../models/IGreeterMessage';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() public message: IGreeterMessage;

  constructor() { }

  ngOnInit() {  }

  get fullMessage(): string {
    return this.message.what + ' ' + this.message.who;
  }
}
