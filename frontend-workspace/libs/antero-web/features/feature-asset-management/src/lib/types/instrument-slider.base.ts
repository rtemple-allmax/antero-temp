import { Component, inject } from '@angular/core';
import { SliderBaseComponent } from "@allmax-angular/antero-web/bases";
import { Nullable } from '@allmax-angular/shared/types';
import { Equipment, Instrument } from '@allmax-angular/antero-web/entities';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { DatabaseController } from '@allmax-angular/antero-web/data-access/database-controller';
import { DataStore } from '@allmax-angular/shared/features/state-management';
import { DataStores } from '@allmax-angular/antero-web/types';

@Component({ template: '' })
export class InstrumentSliderBaseComponent extends SliderBaseComponent {
  public parent: Nullable<Equipment>;
  public source: Nullable<Instrument>;

  protected eqCtrl = inject(EquipmentControllerService);
  protected dbCtrl = inject(DatabaseController);

  protected eqStore: Nullable<DataStore> = this.state.getStore(DataStores.EQUIPMENT);
  protected uiStore: Nullable<DataStore> = this.state.getStore(DataStores.UI);
}