import { Action } from '@ngrx/store';

export const GREET = 'Greet';

export class Greet implements Action {
  readonly type = GREET;
  constructor(public payload: string) { }
}

export type All = Greet
