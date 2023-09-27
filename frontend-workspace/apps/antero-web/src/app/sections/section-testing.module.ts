import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnteroSectionTestingComponent } from '@allmax-angular/antero-web/sections/antero-section-testing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AnteroSectionTestingComponent }])
  ]
})
export class SectionTestingModule { }