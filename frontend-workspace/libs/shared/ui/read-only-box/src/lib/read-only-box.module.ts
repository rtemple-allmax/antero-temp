import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadOnlyBoxComponent } from './read-only-box.component';
import { PopoverButtonModule } from '@allmax-angular/shared/ui/buttons/popover-button';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';

@NgModule({
  imports: [
    CommonModule,
    PopoverButtonModule,
    SpacerModule
  ],
  declarations: [ ReadOnlyBoxComponent ],
  exports: [ ReadOnlyBoxComponent ],
})
export class ReadOnlyBoxModule {}
