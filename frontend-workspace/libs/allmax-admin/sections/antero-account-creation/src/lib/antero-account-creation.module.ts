import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnteroAccountCreationComponent } from './antero-account-creation.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { DateBoxModule } from '@allmax-angular/shared/ui/form-fields/date-box';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';
import { FormsModule } from '@angular/forms';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { CheckBoxModule } from '@allmax-angular/shared/ui/form-fields/check-box';
import { AddAdminUserModule } from '@allmax-angular/allmax-admin/tools/add-admin-user';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    GroupBoxModule,
    TextBoxModule,
    DateBoxModule,
    NumberBoxModule,
    IconButtonModule,
    SpacerModule,
    ModalWindowModule,
    LabelButtonModule,
    FormsModule,
    ScrollBoxModule,
    CheckBoxModule,
    AddAdminUserModule
  ],
  declarations: [AnteroAccountCreationComponent],
  exports: [AnteroAccountCreationComponent],
})
export class AnteroAccountCreationModule {}
