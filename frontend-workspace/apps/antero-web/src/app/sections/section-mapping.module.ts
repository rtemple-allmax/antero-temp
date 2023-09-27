import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionMappingComponent } from '@allmax-angular/antero-web/sections/section-mapping';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionMappingComponent }])
  ]
})
export class SectionMappingModule { }
