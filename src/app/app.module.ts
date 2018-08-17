import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { reducers } from './common/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GetProfileEffects } from './common/effect/getprofile.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterLinkDirectiveStub } from '../testing/router-link-directive-stub';

import {
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule
} from '@angular/material';
@NgModule({
  declarations: [AppComponent, RouterLinkDirectiveStub],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    EffectsModule.forRoot([GetProfileEffects])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
