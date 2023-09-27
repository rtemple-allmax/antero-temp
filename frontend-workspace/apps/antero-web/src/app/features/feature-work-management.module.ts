import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWorkComponent } from '@allmax-angular/antero-web/features/feature-work-management';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionWorkComponent }])
  ]
})
export class FeatureWorkManagementModule { }