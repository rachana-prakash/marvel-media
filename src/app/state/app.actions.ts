export enum AppActionTypes {
  SetUserName = '[APP] Set the username',
  SetLoggedInStatus = '[APP] Set Logged In Status'
}

export class SetUserName {
  readonly type = AppActionTypes.SetUserName;

  constructor(public payload: string) {

  }
}

export class SetLoggedInStatus {
  readonly type = AppActionTypes.SetLoggedInStatus;

  constructor(public payload: boolean) {

  }
}

export type AppActions = SetUserName | SetLoggedInStatus;
