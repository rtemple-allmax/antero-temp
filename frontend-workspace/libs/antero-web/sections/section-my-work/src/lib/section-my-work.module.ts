import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionMyWorkComponent } from './section-my-work.component';
import { AnteroAppFrameModule } from '@allmax-angular/antero-web/ui/antero-app-frame';
import { MasterDetailModule } from '@allmax-angular/shared/ui/master-detail';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { SwitchModule } from '@allmax-angular/shared/ui/switch';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';

@NgModule({
  imports: [
    AnteroAppFrameModule,
    CommonModule,
    DropdownButtonModule,
    FlexModule,
    IconButtonModule,
    MasterDetailModule,
    SwitchModule
  ],
  declarations: [ SectionMyWorkComponent ],
})
export class SectionMyWorkModule {}
