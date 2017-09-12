import { Action } from '@ngrx/store';
import { IGreeterMessage } from '../models/IGreeterService';

export const GREET = 'Greet';
export const GREET_SUCCESS = 'Greet Success';

export class Greet implements Action {
  readonly type = GREET;
}

export class GreetSuccess implements Action {
  readonly type = GREET_SUCCESS;
  constructor(public payload: IGreeterMessage) { }
}

export type All = Greet | GreetSuccess
