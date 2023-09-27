import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnteroSectionEquipmentComponent } from '@allmax-angular/antero-web/sections/antero-section-equipment';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AnteroSectionEquipmentComponent }])
  ]
})
export class SectionEquipmentModule { }
