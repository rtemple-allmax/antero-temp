import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEditorComponent } from './list-editor.component';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { FormsModule } from '@angular/forms';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { ConfirmationModule } from '@allmax-angular/shared/ui/confirmation';
import { CollapsibleModule } from '@allmax-angular/shared/ui/collapsible';
import { SingleEntryFormsModule } from '@allmax-angular/shared/ui/single-entry-forms';
import { ListItemModule } from '@allmax-angular/shared/ui/list-item';
import { SeparatorModule } from '@allmax-angular/shared/ui/separator';

@NgModule({
  imports: [
    CollapsibleModule,
    CommonModule,
    ConfirmationModule,
    DropdownButtonModule,
    FlexModule,
    FormsModule,
    IconButtonModule,
    ListItemModule,
    ScrollBoxModule,
    SingleEntryFormsModule,
    SpacerModule,
    TextBoxModule,
    SeparatorModule
  ],
  declarations: [ ListEditorComponent ],
  exports: [ ListEditorComponent ],
})
export class ListEditorModule {}
