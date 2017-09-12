import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';

import * as state from './store/hello-redux-reducer';

@Injectable()
export class GreeterService {

  constructor() { }

  getGreet(): Observable<state.IGreeterMessage> {
    return Observable.of({ what: 'hello', who: 'redux'}).delay(5000);
  }
}
