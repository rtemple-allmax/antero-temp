import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionRegisterComponent } from '@allmax-angular/antero-web/sections/section-register';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionRegisterComponent }])
  ]
})
export class SectionRegisterModule { }
