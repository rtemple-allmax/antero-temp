import { PartsControllerService } from '@allmax-angular/antero-web/data-access/parts-controller';
import { PartStoreService } from '@allmax-angular/antero-web/state-management/part-store';
import { Component, inject } from '@angular/core';
import { ListItemBaseComponent } from './list-item.base';

@Component({ template: '' })
export class PartListItemBaseComponent extends ListItemBaseComponent {
  public partStore = inject(PartStoreService);
  public partsCtrl = inject(PartsControllerService);
}