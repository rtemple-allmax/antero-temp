import { PanelBaseComponent } from "@allmax-angular/antero-web/bases";
import { CurrentWorkController } from "@allmax-angular/antero-web/data-access/current-work-controller";
import { Component, inject } from "@angular/core";

@Component({ template: '' })
export class WorkViewerPanelBaseComponent  extends PanelBaseComponent {
  public ctrl = inject(CurrentWorkController);
}