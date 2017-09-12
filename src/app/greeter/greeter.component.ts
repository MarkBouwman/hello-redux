import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.css']
})
export class GreeterComponent implements OnInit {

  public message: string;

  constructor() { }

  ngOnInit() {
    this.message = 'hello world';
  }

  greet() {
    this.message = 'hello redux';
  }
}
