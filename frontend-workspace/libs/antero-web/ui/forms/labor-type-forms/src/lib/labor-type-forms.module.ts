import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaborTypeAddComponent } from './labor-type-add/labor-type-add.component';
import { LaborTypeEditComponent } from './labor-type-edit/labor-type-edit.component';
import { LaborTypeDeleteComponent } from './labor-type-delete/labor-type-delete.component';
import { ConfirmationModule } from '@allmax-angular/shared/ui/confirmation';
import { FormsModule } from '@angular/forms';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';

@NgModule({
  imports: [
    CommonModule,
    ConfirmationModule,
    FormsModule,
    GridModule,
    IconButtonModule,
    NumberBoxModule,
    TextBoxModule
  ],
  declarations: [
    LaborTypeAddComponent,
    LaborTypeEditComponent,
    LaborTypeDeleteComponent,
  ],
  exports: [
    LaborTypeAddComponent,
    LaborTypeEditComponent,
    LaborTypeDeleteComponent,
  ],
})
export class LaborTypeFormsModule {}
