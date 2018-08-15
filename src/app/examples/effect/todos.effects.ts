import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, debounceTime } from 'rxjs/operators';
import * as Act from '../action/todo/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosEffects {
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    debounceTime(500),
    ofType(Act.GET_TODO),
    mergeMap(action =>
      this.http$.get('https://jsonplaceholder.typicode.com/users/1/todos').pipe(
        map(data => ({ type: Act.GET_TODO_SUCCESS, payload: data })),
        catchError(() => of({ type: Act.GET_TODO_FAILED }))
      )
    )
  );

  constructor(private http$: HttpClient, private actions$: Actions) {}
}
