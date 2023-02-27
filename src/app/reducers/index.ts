import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer } from '@ngrx/router-store';

export interface AppState {
}

export const initialAuthState: AppState = {
};

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

export function logger(reducers: ActionReducer<any>): ActionReducer<any> {

  return (state, action) => {
    console.log("state before: ", state);
    console.log("action: ", action);

    return reducers(state, action)
  };
}

// meta reducers, run before the regular reducers
export const metaReducers: MetaReducer<AppState> [] =
 !environment.production ? [logger]: [];
