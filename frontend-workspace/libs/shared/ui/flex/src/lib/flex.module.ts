import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './flex.component';
import { FlexChildDirective } from './flex-child.directive';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    FlexComponent,
    FlexChildDirective
  ],
  exports: [
    FlexComponent,
    FlexChildDirective
  ]
})
export class FlexModule {}
