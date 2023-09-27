import { toolbarIcons, miscIcons } from '@allmax-angular/shared/ui/icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ant-work-templates-details-panel',
  templateUrl: './work-templates-details-panel.component.html',
  styleUrls: ['./work-templates-details-panel.component.scss'],
})
export class WorkTemplatesDetailsPanelComponent  {
  public icons = { ...toolbarIcons, ...miscIcons }
}
