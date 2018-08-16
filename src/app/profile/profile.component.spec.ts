import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { ProfileheaderComponent } from './profileheader/profileheader.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppSharedModule } from '../common/shared.module';
import { StoreModule } from '@ngrx/store';
import { ProfilefacadesService } from './service/profilefacades.service';
describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let service: ProfilefacadesService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppSharedModule, StoreModule.forRoot({})],
      declarations: [ProfileComponent, ProfileheaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ProfilefacadesService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ProfilefacadesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('dataexperience toBe array ', () => {
  //   service.onsetInitProfile();
  //   component.dataexperience$.subscribe(data => {
  //     expect(data).not.toBeNull();
  //   });
  // });

  // it('dataproject toBe array ', () => {
  //   service.onsetInitProfile();
  //   component.dataproject$.subscribe(data => {
  //     expect(data).not.toBeNull();
  //   });
  // });
});
