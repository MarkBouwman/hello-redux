import * as helloReduxActions from './hello-redux-actions';

export interface IState {
  message: string;
}

const initSate: IState = {
  message: 'hello world'
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

