import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTransactionsComponent } from './section-transactions.component';
import { AnteroAppFrameModule } from '@allmax-angular/antero-web/ui/antero-app-frame';
import { MasterDetailModule } from '@allmax-angular/shared/ui/master-detail';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { DateRangeBoxModule } from '@allmax-angular/shared/ui/form-fields/date-range-box';

@NgModule({
  imports: [
    AnteroAppFrameModule,
    CommonModule,
    DateRangeBoxModule,
    DropdownButtonModule,
    FlexModule,
    IconButtonModule,
    MasterDetailModule
  ],
  declarations: [ SectionTransactionsComponent ],
  exports: [ SectionTransactionsComponent ],
})
export class SectionTransactionsModule {}
