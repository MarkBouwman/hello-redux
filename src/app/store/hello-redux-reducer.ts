import * as helloReduxActions from './hello-redux-actions';

export interface IState {
  message: IGreeterMessage;
}

export interface IGreeterMessage {
  what: string;
  who: string;
}

const initSate: IState = {
  message: { what: 'hello', who: 'world' }
}

export function reducer(state: IState = initSate, action: helloReduxActions.All): IState {

  switch (action.type) {

    case helloReduxActions.GREET: {
      return {...state, message: action.payload }
    }

    default: {
      return state;
    }
  }
}

