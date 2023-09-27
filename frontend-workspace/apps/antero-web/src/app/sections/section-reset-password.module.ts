import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionResetPasswordComponent } from '@allmax-angular/antero-web/sections/section-reset-password';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionResetPasswordComponent }])
  ]
})
export class SectionResetPasswordModule { }
