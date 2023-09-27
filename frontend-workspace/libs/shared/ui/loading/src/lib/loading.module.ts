import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  declarations: [ LoadingComponent ],
  exports: [ LoadingComponent ],
})
export class LoadingModule {
  
}
