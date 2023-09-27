import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnteroSectionHomeComponent } from '@allmax-angular/antero-web/sections/antero-section-home';

const routes: Routes = [
  { path: '', component: AnteroSectionHomeComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SectionHomeModule { }
