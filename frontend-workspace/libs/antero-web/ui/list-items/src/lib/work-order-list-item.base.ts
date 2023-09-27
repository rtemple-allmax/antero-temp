import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { Component, inject } from '@angular/core';
import { ListItemBaseComponent } from './list-item.base';

@Component({ template: '' })
export class WorkOrderListItemBaseComponent extends ListItemBaseComponent {
  public workCtrl = inject(CurrentWorkController);
  public workStore = inject(CurrentWorkStoreService);
}