import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSelectDatabaseComponent } from './section-select-database.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { DxSelectBoxModule } from 'devextreme-angular';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';

@NgModule({
  imports: [
    CommonModule,
    DxSelectBoxModule,
    LabelButtonModule,
    FlexModule,
    ScrollBoxModule,
    SpacerModule
  ],
  declarations: [ SectionSelectDatabaseComponent ],
  exports: [ SectionSelectDatabaseComponent ],
})
export class SectionSelectDatabaseModule {}
