import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnteroAppFrameComponent } from './antero-app-frame.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarModule } from '@allmax-angular/antero-web/ui/sidebar';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { SlideOutButtonModule } from '@allmax-angular/shared/ui/buttons/slide-out-button';
import { ViewSwitchModule } from '@allmax-angular/shared/ui/view-switch';


@NgModule({
  imports: [
    CommonModule,
    DropdownButtonModule,
    FlexModule,
    FontAwesomeModule,
    IconButtonModule,
    SlideOutButtonModule,
    SpacerModule,
    SidebarModule,
    ViewSwitchModule
  ],
  declarations: [ AnteroAppFrameComponent ],
  exports: [ AnteroAppFrameComponent ],
})
export class AnteroAppFrameModule {}
