import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './radio-group.component';
import { DxRadioGroupModule } from 'devextreme-angular/ui/radio-group';

@NgModule({
  imports: [ 
    CommonModule,
    DxRadioGroupModule
  ],
  declarations: [ RadioGroupComponent ],
  exports: [ RadioGroupComponent ],
})
export class RadioGroupModule {}
