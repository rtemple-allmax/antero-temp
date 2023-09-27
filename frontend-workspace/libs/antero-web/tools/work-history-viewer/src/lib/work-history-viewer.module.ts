import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkHistoryViewerComponent } from './work-history-viewer.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { SeparatorModule } from '@allmax-angular/shared/ui/separator';

@NgModule({
  imports: [
    CommonModule,
    GridModule,
    GroupBoxModule,
    ModalWindowModule,
    ReadOnlyBoxModule,
    ScrollBoxModule,
    SeparatorModule,
    SpacerModule
  ],
  declarations: [ WorkHistoryViewerComponent ],
  exports: [ WorkHistoryViewerComponent ],
})
export class WorkHistoryViewerModule {}
