import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FormsModule } from '@angular/forms';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconModule } from '@allmax-angular/shared/ui/icon';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    FormsModule,
    SpacerModule,
    IconModule
  ],
  declarations: [ ToggleComponent ],
  exports: [ ToggleComponent ],
})
export class ToggleModule {}
