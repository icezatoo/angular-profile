import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, debounceTime } from 'rxjs/operators';
import * as Act from '../action/profile/profile';

@Injectable({
  providedIn: 'root'
})
export class GetProfileEffects {
  @Effect()
  login$: Observable<Action> = this.actions$.pipe(
    debounceTime(500),
    ofType(Act.GET_INIT),
    mergeMap(action =>
      this.http$.get('/assets/mock/profile.json').pipe(
        map(data => ({ type: Act.GET_INIT_SUCCESS, payload: data })),
        catchError(() => of({ type: Act.GET_INIT_FAILED }))
      )
    )
  );

  constructor(private http$: HttpClient, private actions$: Actions) {}
}
