import * as helloReduxActions from './hello-redux-actions';
import { IGreeterMessage } from '../models/IGreeterMessage';

export interface IState {
  message: IGreeterMessage;
  retrieving: boolean;
}

const initSate: IState = {
  message: { what: 'hello', who: 'world' },
  retrieving: false
}

export function reducer(state: IState = initSate, action: helloReduxActions.All): IState {

  switch (action.type) {

    case helloReduxActions.GREET: {
      return {...state, retrieving: true }
    }

    case helloReduxActions.GREET_SUCCESS: {
      return { ...state, message: action.payload, retrieving: false }
    }

    default: {
      return state;
    }
  }
}

