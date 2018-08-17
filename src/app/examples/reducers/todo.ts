import { Todo } from './../services/model/todo';
import * as Action from '../action/todo/todo';
import { v4 as uuid } from 'uuid';

export type TodosFilter = 'ALL' | 'DONE' | 'ACTIVE';

export interface State {
  isLoading: boolean;
  isLoadSuccess: boolean;
  todo: Todo[];
  lengthdata: number;
  filter: TodosFilter;
}

export const initialState: State = {
  isLoading: false,
  isLoadSuccess: false,
  todo: [],
  lengthdata: 0,
  filter: 'ALL'
};

export const initialtodo: Todo = {
  id: null,
  title: '',
  userId: 1,
  completed: false,
  selecttodo: false
};

export function reducer(state = initialState, action: Action.Actions): State {
  switch (action.type) {
    case Action.GET_TODO: {
      return {
        ...state,
        isLoading: true,
        isLoadSuccess: false,
        todo: [],
        lengthdata: 0,
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
        lengthdata: mapdataselect.length,
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
        lengthdata: 0,
        filter: 'ALL'
      };
    }

    case Action.ADD_TODO: {
      const newdatatodo = [
        { ...initialtodo, id: uuid(), title: action.payload },
        ...state.todo
      ];
      return {
        ...state,
        todo: [...newdatatodo],
        lengthdata: onFilterCountlist(state.filter, newdatatodo)
      };
    }

    case Action.REMOVE_TODO: {
      const todolist = state.todo;
      const removetodo = todolist.filter(val => val.id !== action.payload);
      return {
        ...state,
        todo: [...removetodo],
        lengthdata: onFilterCountlist(state.filter, removetodo)
      };
    }

    case Action.TOGGLE_TODO: {
      const todolist = state.todo;
      const togogletodo = todolist.map(
        val =>
          val.id === action.payload
            ? { ...val, completed: !val.completed }
            : val
      );
      return {
        ...state,
        todo: [...togogletodo]
      };
    }

    case Action.FILTER_TODO: {
      return {
        ...state,
        filter: action.payload,
        lengthdata: onFilterCountlist(action.payload, state.todo)
      };
    }

    default: {
      return state;
    }
  }
}

export const onFilterCountlist = (data, todo) => {
  if (data === 'DONE') {
    return todo.filter(val => val.completed == true).length;
  } else if (data === 'ACTIVE') {
    return todo.filter(val => val.completed == false).length;
  } else {
    return todo.length;
  }
};
