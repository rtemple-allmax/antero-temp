import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWorkHistoryComponent } from './section-work-history.component';
import { AnteroAppFrameModule } from '@allmax-angular/antero-web/ui/antero-app-frame';
import { MasterDetailModule } from '@allmax-angular/shared/ui/master-detail';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { DateRangeBoxModule } from '@allmax-angular/shared/ui/form-fields/date-range-box';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { DateBoxModule } from '@allmax-angular/shared/ui/form-fields/date-box';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AnteroAppFrameModule,
    ComboButtonModule,
    CommonModule,
    DateBoxModule,
    DateRangeBoxModule,
    DropdownButtonModule,
    FlexModule,
    FormsModule,
    IconButtonModule,
    MasterDetailModule,
    ModalWindowModule,
    SpacerModule
  ],
  declarations: [ SectionWorkHistoryComponent ],
})
export class SectionWorkHistoryModule {}
