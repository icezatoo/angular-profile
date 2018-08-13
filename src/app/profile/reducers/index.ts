import { createSelector } from '@ngrx/store';
import * as fromprofile from './profile';

export interface State {
  appprofile: fromprofile.State;
}

export const reducers = {
  appprofile: fromprofile.reducer
};

export const getAppprofile = (state: State) => state.appprofile;

export const getdataprofile$ = createSelector(
  getAppprofile,
  (state: fromprofile.State) => {
    return state.profiles;
  }
);

export const getloader$ = createSelector(
  getAppprofile,
  (state: fromprofile.State) => {
    return state.isLoadSuccess;
  }
);

export const getIsLoading$ = createSelector(
  getAppprofile,
  (state: fromprofile.State) => {
    return state.isLoading;
  }
);
