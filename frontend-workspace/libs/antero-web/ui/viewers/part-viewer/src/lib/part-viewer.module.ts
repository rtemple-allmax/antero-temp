import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartViewerComponent } from './part-viewer.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { PartPanelsModule } from '@allmax-angular/antero-web/ui/part-panels';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { AvatarModule } from '@allmax-angular/shared/ui/avatar';

@NgModule({
  imports: [
    AvatarModule,
    CommonModule,
    FlexModule,
    ModalWindowModule,
    PartPanelsModule
  ],
  declarations: [ PartViewerComponent ],
  exports: [ PartViewerComponent ],
})
export class PartViewerModule {}
