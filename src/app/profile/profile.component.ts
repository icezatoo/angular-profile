import { Component, OnInit } from '@angular/core';
import * as fromStore from './reducers';
import * as profileAction from './action/profile';
import { Store } from '@ngrx/store';
import { Profile, Experience, Project } from './service/model/profile';
import { Observable } from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: Observable<Profile>;
  dataexperience: Observable<Experience[]>;
  dataproject: Observable<Project[]>;
  loading: Observable<any>;
  constructor(private store: Store<fromStore.State>) {
    // this.profile = this.store.select(fromStore.getdataprofile$);
    this.dataexperience = this.store
      .select(fromStore.getdataprofile$)
      .pipe(map(data => data.experience));
    this.dataproject = this.store
      .select(fromStore.getdataprofile$)
      .pipe(map(data => data.projects));
    this.loading = this.store.select(fromStore.getloader$);
  }

  ngOnInit() {
    this.store.dispatch(new profileAction.GetInit());
  }
}
