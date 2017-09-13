import { Component, OnInit } from '@angular/core';
import { IGreeterMessage } from './models/IGreeterMessage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public message: IGreeterMessage;

  ngOnInit() {
    this.message = { what: 'hello', who: 'world' }
  }

  greet(message: IGreeterMessage) {
    this.message = message;
  }
}
