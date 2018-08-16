import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TodoheaderComponent } from './todoheader.component';
import { MatMenuModule, MatTooltipModule } from '@angular/material';

describe('TodoheaderComponent', () => {
  let component: TodoheaderComponent;
  let fixture: ComponentFixture<TodoheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatMenuModule, MatTooltipModule],
      declarations: [TodoheaderComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
