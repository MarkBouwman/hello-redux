import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/rx';

import * as reducer from './reducers';
import * as actions from './store/hello-redux-actions';
import { IGreeterMessage } from './store/hello-redux-reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public message$: Observable<IGreeterMessage>;

  constructor(private store: Store<reducer.IApplicationState>) { }

  ngOnInit() {
    this.message$ = this.store.select((state) => state.helloRedux.message);
  }

  onGreet(value: IGreeterMessage) {
    this.store.dispatch(new actions.Greet(value));
  }
}
