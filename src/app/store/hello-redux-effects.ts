import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/rx';

import { GreeterService } from '../greeter.service';

import * as actions from '../store/hello-redux-actions';

@Injectable()
export class HelloReduxEffects {

  @Effect()
  greet$: Observable<Action> = this.actions$.ofType(actions.GREET)
  .switchMap(action => this.greeter.getGreet())
  .map(message => new actions.GreetSuccess(message));

  constructor(private actions$: Actions, private greeter: GreeterService) { }
}
