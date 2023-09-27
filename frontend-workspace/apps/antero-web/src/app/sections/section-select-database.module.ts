import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionSelectDatabaseComponent } from '@allmax-angular/antero-web/sections/section-select-database';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionSelectDatabaseComponent }])
  ]
})
export class SectionSelectDatabaseModule { }
