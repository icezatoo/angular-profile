import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { AppSharedModule } from '../../common/shared.module';
@NgModule({
  declarations: [ExamplesComponent],
  imports: [CommonModule, ExamplesRoutingModule, AppSharedModule],
  providers: []
})
export class ExamplesModule {}
