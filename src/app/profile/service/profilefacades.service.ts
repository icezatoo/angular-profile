import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import * as fromStore from '../../common/reducers';
import { Store } from '@ngrx/store';
import * as profileAction from '../../common/action/profile/profile';
@Injectable({
  providedIn: 'root'
})
export class ProfilefacadesService {
  constructor(private store: Store<fromStore.State>) {}

  ongetexperience$() {
    return this.store.select(fromStore.getdataprofile$).pipe(
      map(data => data.experience),
      map(val => val.map(this.onmapdatastate)),
      take(1)
    );
  }

  ongetprojects$() {
    return this.store.select(fromStore.getdataprofile$).pipe(
      map(data => data.projects),
      map(val => val.map(this.onmapdatastate)),
      take(1)
    );
  }

  ongetoverview$() {
    return this.store.select(fromStore.getdataprofile$).pipe(
      map(data => data.overview),
      take(1)
    );
  }

  ongetloading$() {
    return this.store.select(fromStore.getloader$);
  }

  onsetInitProfile() {
    this.store.dispatch(new profileAction.GetInit());
  }

  onmapdatastate(data) {
    return { ...data, state: 'inactive' };
  }
}
