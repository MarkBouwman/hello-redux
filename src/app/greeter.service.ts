import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/rx';

import { IGreeterMessage } from './models/IGreeterMessage'

@Injectable()
export class GreeterService {

  constructor() { }

  getGreet(): Observable<IGreeterMessage> {
    return Observable.of({ what: 'hello', who: 'redux'}).delay(5000);
  }
}
