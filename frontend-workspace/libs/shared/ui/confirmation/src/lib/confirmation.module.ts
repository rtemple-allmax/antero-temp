import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './confirmation.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';

@NgModule({
  imports: [
    ComboButtonModule,
    CommonModule,
    FlexModule,
    ModalWindowModule,
    SpacerModule
  ],
  declarations: [ ConfirmationComponent ],
  exports: [ ConfirmationComponent ],
})
export class ConfirmationModule {}
