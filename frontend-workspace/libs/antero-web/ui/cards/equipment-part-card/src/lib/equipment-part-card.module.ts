import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentPartCardComponent } from './equipment-part-card.component';
import { CardModule } from '@allmax-angular/shared/ui/card';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';

@NgModule({
  imports: [
    CardModule,
    CommonModule,
    GridModule,
    ReadOnlyBoxModule,
    SpacerModule
  ],
  declarations: [ EquipmentPartCardComponent ],
  exports: [ EquipmentPartCardComponent ],
})
export class EquipmentPartCardModule {}
