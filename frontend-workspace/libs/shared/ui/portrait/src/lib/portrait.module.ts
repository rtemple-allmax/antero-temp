import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortraitComponent } from './portrait.component';
import { DxContextMenuModule } from 'devextreme-angular';
import { IconModule } from '@allmax-angular/shared/ui/icon';
import { FlexModule } from '@allmax-angular/shared/ui/flex';

@NgModule({
  imports: [
    CommonModule,
    DxContextMenuModule,
    FlexModule,
    IconModule
  ],
  declarations: [ PortraitComponent ],
  exports: [ PortraitComponent ],
})
export class PortraitModule {}
