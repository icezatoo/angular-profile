import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutcontainerComponent } from './layoutcontainer.component';

describe('LayoutcontainerComponent', () => {
  let component: LayoutcontainerComponent;
  let fixture: ComponentFixture<LayoutcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutcontainerComponent ]
    })
    .compileComponents();
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
