import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionPartsComponent } from '@allmax-angular/antero-web/sections/section-parts';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionPartsComponent }])
  ]
})
export class SectionPartsModule { }
