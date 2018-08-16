import { Injectable } from '@angular/core';
import * as fromStore from '../reducers';
import { Store } from '@ngrx/store';
import * as todoAction from '../action/todo/todo';

@Injectable({
  providedIn: 'root'
})
export class ExamplesfacadesService {
  constructor(private store: Store<fromStore.State>) {}

  ongetTodo$() {
    return this.store.select(fromStore.getTodo$);
  }

  onsetTodo() {
    this.store.dispatch(new todoAction.GetTodo());
  }

  getloading$() {
    return this.store.select(fromStore.getIsLodingTodo$);
  }

  getlengthtodo$() {
    return this.store.select(fromStore.getlengthTodolist$);
  }

  addTodo(title: string) {
    this.store.dispatch(new todoAction.AddTodolist(title));
  }
}
