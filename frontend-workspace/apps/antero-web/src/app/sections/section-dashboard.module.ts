import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionDashboardComponent } from '@allmax-angular/antero-web/sections/section-dashboard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionDashboardComponent }])
  ]
})
export class SectionDashboardModule { }
