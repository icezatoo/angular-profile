import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesComponent } from './examples.component';
import { TodoheaderComponent } from './components/todoheader/todoheader.component';
import { TodoformsComponent } from './components/todoforms/todoforms.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { AppSharedModule } from '../common/shared.module';
import {
  MatTooltipModule,
  MatMenuModule,
  MatChipsModule,
  MatCheckboxModule
} from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './effect/todos.effects';
import { ExamplesfacadesService } from './services/examplesfacades.service';
import { Observable } from 'rxjs';
import { FilterPipe } from './pips/filter.pipe';

let component: ExamplesComponent;
let fixture: ComponentFixture<ExamplesComponent>;
let examplesservice: ExamplesfacadesService;
let effects: TodosEffects;
let actions: Observable<any>;
describe('ExamplesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppSharedModule,
        MatTooltipModule,
        MatMenuModule,
        MatChipsModule,
        MatCheckboxModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([TodosEffects])
      ],
      declarations: [
        ExamplesComponent,
        TodoheaderComponent,
        TodoformsComponent,
        TodolistComponent,
        FilterPipe
      ],
      providers: [ExamplesfacadesService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesComponent);
    component = fixture.componentInstance;
    examplesservice = TestBed.get(ExamplesfacadesService);
    effects = TestBed.get(TodosEffects);
    fixture.detectChanges();
  });

  it('should create examples', () => {
    expect(component).toBeTruthy();
  });
});
