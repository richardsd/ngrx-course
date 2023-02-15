import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from '../auth/reducers';

export const selectAuthSate = createFeatureSelector<AuthState>('auth');

// memoize function
export const isLoggedIn = createSelector(
  selectAuthSate,
  auth => !!auth.user,
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn,
);