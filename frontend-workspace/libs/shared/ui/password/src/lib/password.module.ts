import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    FormsModule,
    SpacerModule,
    TextBoxModule,
    FontAwesomeModule
  ],
  declarations: [
    CreatePasswordComponent
  ],
  exports: [
    CreatePasswordComponent
  ],
})
export class PasswordModule {}
