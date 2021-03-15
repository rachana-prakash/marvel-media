import {createFeatureSelector, createSelector} from '@ngrx/store';
import {LoginState} from './app.reducer';

export const getLoginState = createFeatureSelector<LoginState>('root');

export const getUsername = createSelector(getLoginState, state => state.username);

export const getLoggedInStatus = createSelector(getLoginState, state => state.isLoggedIn);
