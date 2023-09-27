import { PanelBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkHistoryControllerService } from '@allmax-angular/antero-web/data-access/work-history-controller';
import { Component, inject } from '@angular/core';

@Component({ template: '' })
export class WorkHistoryPanelBaseComponent extends PanelBaseComponent {
  public ctrl = inject(WorkHistoryControllerService);
}