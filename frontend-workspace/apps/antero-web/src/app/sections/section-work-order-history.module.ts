import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionWorkHistoryComponent } from '@allmax-angular/antero-web/sections/section-work-history'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionWorkHistoryComponent }])
  ]
})
export class SectionWorkOrderHistoryModule { }
