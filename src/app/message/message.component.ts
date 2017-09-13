import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IGreeterMessage } from '../models/IGreeterMessage';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() public message: IGreeterMessage;
  @Input() public loading: boolean;

  constructor() { }

  ngOnInit() { }
}
