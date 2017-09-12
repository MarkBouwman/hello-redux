import { ActionReducerMap } from '@ngrx/store'

import * as helloRedux from './store/hello-redux-reducer';

export interface IApplicationState {
  helloRedux: helloRedux.IState;
}

export const reducers: ActionReducerMap<IApplicationState> = {
  helloRedux: helloRedux.reducer
}
