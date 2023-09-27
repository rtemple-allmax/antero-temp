import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWorkReviewComponent } from './section-work-review.component';
import { AnteroAppFrameModule } from '@allmax-angular/antero-web/ui/antero-app-frame';
import { MasterDetailModule } from '@allmax-angular/shared/ui/master-detail';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';

@NgModule({
  imports: [
    AnteroAppFrameModule,
    CommonModule,
    DropdownButtonModule,
    FlexModule,
    IconButtonModule,
    LabelButtonModule,
    MasterDetailModule
  ],
  declarations: [ SectionWorkReviewComponent ],
  exports: [ SectionWorkReviewComponent ],
})
export class SectionWorkReviewModule {}
