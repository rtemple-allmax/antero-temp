import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SectionTransactionsComponent } from '@allmax-angular/antero-web/sections/section-transactions';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SectionTransactionsComponent }])
  ]
})
export class SectionTransactionsModule { }
