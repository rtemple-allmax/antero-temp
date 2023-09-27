import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionCurrentWorkComponent } from '@allmax-angular/antero-web/sections/section-current-work';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionCurrentWorkComponent }])
  ]
})
export class SectionCurrentWorkModule { }
