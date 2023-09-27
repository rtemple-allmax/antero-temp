import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionResetPasswordComponent } from './section-reset-password.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { PasswordModule } from '@allmax-angular/shared/ui/password';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    LabelButtonModule,
    PasswordModule,
    SpacerModule,
  ],
  declarations: [ SectionResetPasswordComponent ],
  exports: [ SectionResetPasswordComponent ],
})
export class SectionResetPasswordModule {}
