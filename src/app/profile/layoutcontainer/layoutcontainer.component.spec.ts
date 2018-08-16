import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutcontainerComponent } from './layoutcontainer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('LayoutcontainerComponent', () => {
  let component: LayoutcontainerComponent;
  let fixture: ComponentFixture<LayoutcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutcontainerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
