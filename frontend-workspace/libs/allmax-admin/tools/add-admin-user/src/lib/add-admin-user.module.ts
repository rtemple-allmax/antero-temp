import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAdminUserComponent } from './add-admin-user.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    FormsModule,
    LabelButtonModule,
    ModalWindowModule,
    SpacerModule,
    TextBoxModule
  ],
  declarations: [AddAdminUserComponent],
  exports: [AddAdminUserComponent],
})
export class AddAdminUserModule {}
