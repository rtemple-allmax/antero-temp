import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionAdminComponent } from '@allmax-angular/antero-web/sections/section-admin';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionAdminComponent }])
  ]
})
export class SectionAdminModule { }