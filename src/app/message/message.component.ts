import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { IGreeterMessage } from '../store/hello-redux-reducer';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit {

  @Input() public message: IGreeterMessage;
  @Input() public loading: boolean;

  constructor() { }

  ngOnInit() { }
}
