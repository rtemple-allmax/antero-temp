import { WorkHistorySectionStore } from '@allmax-angular/antero-web/state-management/work-history-section-store';
import { Component, inject } from '@angular/core';
import { ListItemBaseComponent } from './list-item.base';

export class WorkHistoryListItemBaseComponent extends ListItemBaseComponent {
  public historyStore = inject(WorkHistorySectionStore);
}