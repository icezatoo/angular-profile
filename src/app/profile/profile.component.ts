import { Component, OnInit } from '@angular/core';
import { Overview, Experience, Project } from './service/model/profile';
import { Observable } from 'rxjs';
import { ProfilefacadesService } from './service/profilefacades.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileoverview: Observable<Overview>;
  dataexperience: Observable<Experience[]>;
  dataproject: Observable<Project[]>;
  loading: Observable<any>;
  constructor(private profilefacadesService: ProfilefacadesService) {
    this.dataexperience = this.profilefacadesService.ongetexperience$();
    this.dataproject = this.profilefacadesService.ongetprojects$();
    this.profileoverview = this.profilefacadesService.ongetoverview$();
    this.loading = this.profilefacadesService.ongetloading$();
  }

  ngOnInit() {
    this.profilefacadesService.onsetInitProfile();
  }
}
