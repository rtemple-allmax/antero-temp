import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch.component';
import { ToggleModule } from '@allmax-angular/shared/ui/toggle';
import { FlexModule } from '@allmax-angular/shared/ui/flex';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    ToggleModule
  ],
  declarations: [ SwitchComponent ],
  exports: [ SwitchComponent ],
})
export class SwitchModule {}
