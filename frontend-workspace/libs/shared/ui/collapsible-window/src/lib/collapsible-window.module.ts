import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleWindowComponent } from './collapsible-window.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';

@NgModule({
  imports: [
    CommonModule,
    FlexModule
  ],
  declarations: [ CollapsibleWindowComponent ],
  exports: [ CollapsibleWindowComponent ],
})
export class CollapsibleWindowModule {}
