import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollBoxComponent } from './scroll-box.component';
import { DxScrollViewModule } from 'devextreme-angular';

@NgModule({
  imports: [ 
    CommonModule,
    DxScrollViewModule
  ],
  declarations: [ ScrollBoxComponent ],
  exports: [ ScrollBoxComponent ],
})
export class ScrollBoxModule {}
