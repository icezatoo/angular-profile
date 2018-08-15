import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  declarations: []
})
export class AppSharedModule {}
