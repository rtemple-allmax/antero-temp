import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaborClassAddComponent } from './labor-class-add/labor-class-add.component';
import { LaborClassEditComponent } from './labor-class-edit/labor-class-edit.component';
import { LaborClassDeleteComponent } from './labor-class-delete/labor-class-delete.component';
import { FormsModule } from '@angular/forms';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { ConfirmationModule } from '@allmax-angular/shared/ui/confirmation';

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
    LaborClassAddComponent,
    LaborClassEditComponent,
    LaborClassDeleteComponent,
  ],
  exports: [
    LaborClassAddComponent,
    LaborClassEditComponent,
    LaborClassDeleteComponent,
  ],
})
export class LaborClassFormsModule {}
