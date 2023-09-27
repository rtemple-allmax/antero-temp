import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnteroRestoreBackupComponent } from './antero-restore-backup.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FilePickerModule } from '@allmax-angular/shared/ui/file-picker';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { FormsModule } from '@angular/forms';
import { LabelButtonModule } from '@allmax-angular/shared/ui/buttons/label-button';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';

@NgModule({
  imports: [
    CommonModule,
    SpacerModule,
    FlexModule,
    FilePickerModule,
    FormsModule,
    TextBoxModule,
    LabelButtonModule,
    NumberBoxModule
  ],
  declarations: [ AnteroRestoreBackupComponent ],
  exports: [ AnteroRestoreBackupComponent ],
})
export class AnteroRestoreBackupModule {}
