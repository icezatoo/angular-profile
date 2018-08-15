import * as Action from '../action/todo/todo';
import { Todo } from '../../examples/services/model/todo';

export type TodosFilter = 'ALL' | 'DONE' | 'ACTIVE';

export interface State {
  isLoading: boolean;
  isLoadSuccess: boolean;
  todo: Todo[];
  filter: TodosFilter;
}

export const initialState: State = {
  isLoading: false,
  isLoadSuccess: false,
  todo: [],
  filter: 'ALL'
};

export function reducer(state = initialState, action: Action.Actions): State {
  switch (action.type) {
    case Action.GET_TODO: {
      return {
        ...state,
        isLoading: true,
        isLoadSuccess: false,
        todo: [],
        filter: 'ALL'
      };
    }

    case Action.GET_TODO_SUCCESS: {
      const dataapi: Todo[] = action.payload;
      const mapdataselect = dataapi.map(val => ({ ...val, selecttodo: false }));
      return {
        ...state,
        isLoading: false,
        isLoadSuccess: true,
        todo: [...mapdataselect],
        filter: 'ALL'
      };
    }

    case Action.GET_TODO_FAILED: {
      return {
        ...state,
        isLoading: false,
        isLoadSuccess: false,
        todo: [],
        filter: 'ALL'
      };
    }

    default: {
      return state;
    }
  }
}
