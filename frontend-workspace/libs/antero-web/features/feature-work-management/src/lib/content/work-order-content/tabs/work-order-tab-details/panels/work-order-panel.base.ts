import { Component, inject } from '@angular/core';
import { PanelBaseComponent } from "@allmax-angular/antero-web/bases";
import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';

@Component({ template: '' })
export class WorkOrderPanelBaseComponent extends PanelBaseComponent {
  public ctrl = inject(CurrentWorkController);
}