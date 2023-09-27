import { TabBaseComponent } from '@allmax-angular/antero-web/bases';
import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { Component, inject } from '@angular/core';

@Component({ template: '' })
export class WorkOrderTabBaseComponent extends TabBaseComponent {
  public ctrl = inject(CurrentWorkController);
  public workStore = inject(CurrentWorkStoreService);
} 