import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWorkReviewComponent } from '@allmax-angular/antero-web/sections/section-work-review';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionWorkReviewComponent }])
  ]
})
export class SectionWorkReviewModule { }
