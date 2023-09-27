import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowComponent } from './window.component';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { FlexModule } from '@allmax-angular/shared/ui/flex';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    IconButtonModule
  ],
  declarations: [ WindowComponent ],
  exports: [ WindowComponent ],
})
export class WindowModule {}
