import {AppActionTypes} from './app.actions';

export interface LoginState {
  username: string;
  isLoggedIn: boolean;
}

const InitialState = {
  username: '',
  isLoggedIn: false
};

export function appReducer(state: LoginState = InitialState, action: any) {

  switch (action.type) {
    case AppActionTypes.SetUserName:
      return {
        ...state, username: action.payload
      };
    case AppActionTypes.SetLoggedInStatus:
      return {
        ...state, isLoggedIn: action.payload
      };
    default:
      return state;
  }
}
