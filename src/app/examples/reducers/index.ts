import { createSelector } from '@ngrx/store';
import * as fromtodo from './todo';

export interface State {
  apptodo: fromtodo.State;
}

export const reducers = {
  apptodo: fromtodo.reducer
};

export const getApptodo = (state: State) => state.apptodo;

export const getIsLodingTodo$ = createSelector(
  getApptodo,
  (state: fromtodo.State) => {
    return state.isLoading;
  }
);

export const getTodo$ = createSelector(getApptodo, (state: fromtodo.State) => {
  return state.todo;
});
