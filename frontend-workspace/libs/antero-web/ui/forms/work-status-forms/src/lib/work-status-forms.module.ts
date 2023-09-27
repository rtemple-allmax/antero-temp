import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkStatusAddComponent } from './work-status-add/work-status-add.component';
import { WorkStatusEditComponent } from './work-status-edit/work-status-edit.component';
import { WorkStatusDeleteComponent } from './work-status-delete/work-status-delete.component';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { ColorBoxModule } from '@allmax-angular/shared/ui/form-fields/color-box';
import { FormsModule } from '@angular/forms';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { ConfirmationModule } from '@allmax-angular/shared/ui/confirmation';

@NgModule({
  imports: [
    ColorBoxModule,
    CommonModule,
    ConfirmationModule,
    FormsModule,
    GridModule,
    IconButtonModule,
    TextBoxModule
  ],
  declarations: [
    WorkStatusAddComponent,
    WorkStatusEditComponent,
    WorkStatusDeleteComponent,
  ],
  exports: [
    WorkStatusAddComponent,
    WorkStatusEditComponent,
    WorkStatusDeleteComponent,
  ],
})
export class WorkStatusFormsModule {}
