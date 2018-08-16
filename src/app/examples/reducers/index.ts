import { createSelector } from '@ngrx/store';
import * as fromtodo from './todo';

export interface State {
  apptodo: fromtodo.State;
}

export const reducers = fromtodo.reducer;

export const getApptodo = (state: State) => state.apptodo;

export const getIsLodingTodo$ = createSelector(
  getApptodo,
  (state: fromtodo.State) => {
    return state.isLoadSuccess;
  }
);

export const getTodo$ = createSelector(getApptodo, (state: fromtodo.State) => {
  return state.todo;
});

export const getlengthTodolist$ = createSelector(
  getApptodo,
  (state: fromtodo.State) => {
    return state.lengthdata;
  }
);
