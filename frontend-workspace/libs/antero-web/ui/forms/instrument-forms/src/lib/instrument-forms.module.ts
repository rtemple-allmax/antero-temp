import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentAddComponent } from './instrument-add/instrument-add.component';
import { InstrumentEditComponent } from './instrument-edit/instrument-edit.component';
import { InstrumentDeleteComponent } from './instrument-delete/instrument-delete.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { FormsModule } from '@angular/forms';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { SelectBoxModule } from '@allmax-angular/shared/ui/form-fields/select-box';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { ConfirmationModule } from '@allmax-angular/shared/ui/confirmation';

@NgModule({
  imports: [
    CommonModule,
    ComboButtonModule,
    ConfirmationModule,
    FlexModule,
    FormsModule,
    ModalWindowModule,
    NumberBoxModule,
    SelectBoxModule,
    SpacerModule,
    TextBoxModule,
  ],
  declarations: [
    InstrumentAddComponent,
    InstrumentEditComponent,
    InstrumentDeleteComponent,
  ],
  exports: [
    InstrumentAddComponent,
    InstrumentEditComponent,
    InstrumentDeleteComponent,
  ],
})
export class InstrumentFormsModule {}
