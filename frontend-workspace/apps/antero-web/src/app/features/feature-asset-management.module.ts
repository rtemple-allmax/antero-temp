import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionEquipmentComponent } from '@allmax-angular/antero-web/features/feature-asset-management';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionEquipmentComponent }])
  ]
})
export class FeatureAssetManagementModule { }