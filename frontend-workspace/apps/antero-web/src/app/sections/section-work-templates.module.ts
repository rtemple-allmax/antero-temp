import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWorkTemplatesComponent } from '@allmax-angular/antero-web/sections/section-work-templates';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionWorkTemplatesComponent }])
  ]
})
export class SectionWorkTemplatesModule { }
