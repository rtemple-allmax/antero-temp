import { SliderBaseComponent } from '@allmax-angular/antero-web/bases';
import { DatabaseController } from '@allmax-angular/antero-web/data-access/database-controller';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { EquipmentPart } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { DataStore } from '@allmax-angular/shared/features/state-management';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, inject } from '@angular/core';

@Component({ template: '' })
export class PartSliderBaseComponent extends SliderBaseComponent {
  public source: Nullable<EquipmentPart>;

  protected eqCtrl = inject(EquipmentControllerService);
  protected dbCtrl = inject(DatabaseController);

  protected eqStore: Nullable<DataStore> = this.state.getStore(DataStores.EQUIPMENT);
  protected uiStore: Nullable<DataStore> = this.state.getStore(DataStores.UI);
}