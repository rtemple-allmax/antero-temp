import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionSuppliersComponent } from '@allmax-angular/antero-web/sections/section-suppliers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionSuppliersComponent }])
  ]
})
export class SectionSuppliersModule { }
