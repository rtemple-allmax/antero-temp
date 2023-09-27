import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSwitchComponent } from './view-switch.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    IconButtonModule
  ],
  declarations: [ ViewSwitchComponent ],
  exports: [ ViewSwitchComponent ],
})
export class ViewSwitchModule {}
