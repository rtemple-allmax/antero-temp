import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWorkManagementComponent } from '@allmax-angular/antero-web/sections/section-work-management';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionWorkManagementComponent }])
  ]
})
export class SectionWorkManagementModule { }
