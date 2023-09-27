import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionOrderingComponent } from '@allmax-angular/antero-web/sections/section-ordering';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionOrderingComponent }])
  ]
})
export class SectionOrderingModule { }
