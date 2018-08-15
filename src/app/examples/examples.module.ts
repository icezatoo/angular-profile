import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { AppSharedModule } from '../common/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { TodosEffects } from './effect/todos.effects';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TodoheaderComponent } from './components/todoheader/todoheader.component';
import { TodoformsComponent } from './components/todoforms/todoforms.component';

import {
  MatTooltipModule,
  MatMenuModule,
  MatChipsModule
} from '@angular/material';

@NgModule({
  declarations: [
    ExamplesComponent,
    TodolistComponent,
    TodoheaderComponent,
    TodoformsComponent
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    MatTooltipModule,
    AppSharedModule,
    MatMenuModule,
    MatChipsModule,
    StoreModule.forFeature('examples', reducers),
    EffectsModule.forFeature([TodosEffects])
  ],
  providers: []
})
export class ExamplesModule {}
