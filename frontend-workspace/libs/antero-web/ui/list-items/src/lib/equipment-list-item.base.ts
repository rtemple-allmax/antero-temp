import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Component, inject} from '@angular/core';
import { ListItemBaseComponent } from './list-item.base';

@Component({ template: '' })
export class EquipmentListItemBaseComponent extends ListItemBaseComponent {
  public eqStore = inject(EquipmentSectionStore);
}