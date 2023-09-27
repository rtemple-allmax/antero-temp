import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionMyWorkComponent } from '@allmax-angular/antero-web/sections/section-my-work';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionMyWorkComponent }])
  ]
})
export class SectionMyWorkModule { }
