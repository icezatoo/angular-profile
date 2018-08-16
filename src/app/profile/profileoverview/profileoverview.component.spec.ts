import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileoverviewComponent } from './profileoverview.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('ProfileoverviewComponent', () => {
  let component: ProfileoverviewComponent;
  let fixture: ComponentFixture<ProfileoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileoverviewComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileoverviewComponent);
    component = fixture.componentInstance;
  });

  it('should create Profileoverview', () => {
    expect(component).toBeTruthy();
  });
});
