import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { CheckBoxModule } from '@allmax-angular/shared/ui/form-fields/check-box';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from '@allmax-angular/shared/ui/avatar';
import { IconModule } from '@allmax-angular/shared/ui/icon';
import { LinkButtonModule } from '@allmax-angular/shared/ui/buttons/link-button';
import { DxScrollViewModule } from 'devextreme-angular';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { FilePickerModule } from '@allmax-angular/shared/ui/file-picker';
import { TextBoxModule } from '@allmax-angular/shared/ui/form-fields/text-box';
import { NumberBoxModule } from '@allmax-angular/shared/ui/form-fields/number-box';
import { ToggleModule } from '@allmax-angular/shared/ui/toggle';

@NgModule({
  imports: [
    AvatarModule,
    CheckBoxModule,
    ComboButtonModule,
    CommonModule,
    DxScrollViewModule,
    FilePickerModule,
    FlexModule,
    FormsModule,
    GridModule,
    GroupBoxModule,
    LinkButtonModule,
    ModalWindowModule,
    SpacerModule,
    TextBoxModule,
    NumberBoxModule,
    IconModule,
    ToggleModule
  ],
  declarations: [ UserProfileComponent ],
  exports: [ UserProfileComponent ],
})
export class UserProfileModule {}
