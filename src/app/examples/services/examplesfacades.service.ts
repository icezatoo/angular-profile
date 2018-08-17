import { combineLatest } from 'rxjs';
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

  onsetfilter(filter) {
    this.store.dispatch(new todoAction.FilterTodolist(filter));
  }

  getloading$() {
    return this.store.select(fromStore.getIsLodingTodo$);
  }

  getlengthtodo$() {
    return this.store.select(fromStore.getlengthTodolist$);
  }

  getFiltertodo$() {
    return this.store.select(fromStore.getFilterTodolist$);
  }

  addTodo(title: string) {
    this.store.dispatch(new todoAction.AddTodolist(title));
  }

  removeTodolist(id: string) {
    this.store.dispatch(new todoAction.RemoveTodolist(id));
  }

  onToggleTodolist(id: string) {
    this.store.dispatch(new todoAction.ToggleTodolist(id));
  }

  ongetdataheader$() {
    return combineLatest(this.getFiltertodo$(), this.getlengthtodo$());
  }
}
