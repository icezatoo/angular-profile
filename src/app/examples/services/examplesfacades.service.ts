import { Injectable } from '@angular/core';
import { map, take, filter } from 'rxjs/operators';
import * as fromStore from '../reducers';
import { Store } from '@ngrx/store';
import * as todoAction from '../action/todo/todo';

@Injectable({
  providedIn: 'root'
})
export class ExamplesfacadesService {
  constructor(private store: Store<fromStore.State>) {}

  ongetTodo$() {
    return this.store.select(fromStore.getTodo$).pipe(
      filter((data, index) => index >= 10),
      take(1)
    );
  }

  onsetTodo() {
    this.store.dispatch(new todoAction.GetTodo());
  }
}
