import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWorkRequestsComponent } from '@allmax-angular/antero-web/sections/section-work-requests';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionWorkRequestsComponent }])
  ]
})
export class SectionWorkRequestsModule { }
