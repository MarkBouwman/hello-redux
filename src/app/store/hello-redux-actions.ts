import { Action } from '@ngrx/store';
import * as state from './hello-redux-reducer';

export const GREET = 'Greet';
export const GREET_SUCCESS = 'Greet Success';

export class Greet implements Action {
  readonly type = GREET;
}

export class GreetSuccess implements Action {
  readonly type = GREET_SUCCESS;
  constructor(public payload: state.IGreeterMessage) { }
}

export type All = Greet | GreetSuccess
