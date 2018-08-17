import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileheaderComponent } from './profileheader.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProfileheaderComponent', () => {
  let component: ProfileheaderComponent;
  let fixture: ComponentFixture<ProfileheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileheaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileheaderComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
