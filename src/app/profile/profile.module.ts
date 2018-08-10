import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AppSharedModule } from '../../common/shared.module';
import { ProfileheaderComponent } from './profileheader/profileheader.component';

@NgModule({
  declarations: [ProfileComponent, ProfileheaderComponent],
  imports: [CommonModule, ProfileRoutingModule, AppSharedModule]
})
export class ProfileModule {}
