import { Action } from '@ngrx/store';
import { IGreeterMessage } from './hello-redux-reducer';

export const GREET = 'Greet';

export class Greet implements Action {
  readonly type = GREET;
  constructor(public payload: IGreeterMessage) { }
}

export type All = Greet
