import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionRegisterComponent } from './section-register.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { PasswordModule } from '@allmax-angular/shared/ui/password';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { FormsModule } from '@angular/forms';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    FormsModule,
    LabelButtonModule,
    PasswordModule,
    SpacerModule,
    TextBoxModule
  ],
  declarations: [ SectionRegisterComponent ],
  exports: [ SectionRegisterComponent ],
})
export class SectionRegisterModule {}
