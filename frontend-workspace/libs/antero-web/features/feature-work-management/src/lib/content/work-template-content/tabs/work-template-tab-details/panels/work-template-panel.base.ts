import { PanelBaseComponent } from '@allmax-angular/antero-web/bases';
import { Component, inject } from '@angular/core';
import { WorkTemplatesControllerService } from '@allmax-angular/antero-web/data-access/work-templates-controller';

@Component({ template: '' })
export class WorkTemplatePanelBaseComponent extends PanelBaseComponent {
  public ctrl = inject(WorkTemplatesControllerService);
}