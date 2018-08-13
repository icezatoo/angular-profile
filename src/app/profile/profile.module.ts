import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AppSharedModule } from '../common/shared.module';
import { ProfileheaderComponent } from './profileheader/profileheader.component';
import { ProfileoverviewComponent } from './profileoverview/profileoverview.component';
import { LayoutcontainerComponent } from './layoutcontainer/layoutcontainer.component';
@NgModule({
  declarations: [
    ProfileComponent,
    LayoutcontainerComponent,
    ProfileheaderComponent,
    ProfileoverviewComponent
  ],
  imports: [CommonModule, ProfileRoutingModule, AppSharedModule]
})
export class ProfileModule {}
