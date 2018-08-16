import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TodoformsComponent } from './todoforms.component';
import { FormsModule } from '@angular/forms';
import {
  MatTooltipModule,
  MatMenuModule,
  MatChipsModule
} from '@angular/material';

describe('TodoformsComponent', () => {
  let component: TodoformsComponent;
  let fixture: ComponentFixture<TodoformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatTooltipModule, MatMenuModule, MatChipsModule],
      declarations: [TodoformsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
