import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentListItemComponent } from './instrument-list-item/instrument-list-item.component';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { EquipmentPartListItemComponent } from './equipment-part-list-item/equipment-part-list-item.component';
import { MediaObjectModule } from '@allmax-angular/shared/ui/media-object';
import { AvatarModule } from '@allmax-angular/shared/ui/avatar';
import { SeparatorModule } from '@allmax-angular/shared/ui/separator';
import { PopoverButtonModule } from '@allmax-angular/shared/ui/buttons/popover-button';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { CrudButtonModule } from '@allmax-angular/shared/ui/buttons/crud-button';
import { PopoverTextModule } from '@allmax-angular/shared/ui/popover-text';

@NgModule({
  imports: [
    AvatarModule,
    CommonModule,
    DropdownButtonModule,
    FlexModule,
    GridModule,
    IconButtonModule,
    MediaObjectModule,
    SpacerModule,
    SeparatorModule,
    PopoverButtonModule,
    CrudButtonModule,
    PopoverTextModule
  ],
  declarations: [InstrumentListItemComponent, EquipmentPartListItemComponent],
  exports: [InstrumentListItemComponent, EquipmentPartListItemComponent],
})
export class EquipmentListItemsModule {}
