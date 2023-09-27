import { Component, OnInit } from '@angular/core';
import { WorkTemplatePanelBaseComponent } from '../work-template-panel.base';

@Component({
  selector: 'ant-work-template-panel-scheduling',
  templateUrl: './work-template-panel-scheduling.component.html',
  styleUrls: ['./work-template-panel-scheduling.component.scss'],
})
export class WorkTemplatePanelSchedulingComponent extends WorkTemplatePanelBaseComponent {
  public enabled = true;
  
  public get toggleLabel(): string {
    return this.enabled ? 'Schedule Is Enabled' : 'Schedule Is Disabled'
  }
}
