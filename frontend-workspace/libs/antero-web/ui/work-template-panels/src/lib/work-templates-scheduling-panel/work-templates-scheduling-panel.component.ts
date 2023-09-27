import { Component, OnInit } from '@angular/core';

enum SchedulingTypes {
  
}

@Component({
  selector: 'ant-work-templates-scheduling-panel',
  templateUrl: './work-templates-scheduling-panel.component.html',
  styleUrls: ['./work-templates-scheduling-panel.component.scss'],
})
export class WorkTemplatesSchedulingPanelComponent {
  public schedulingTypes = [ 'Days In Service / Instrument', 'Calendar', 'Out of Service' ];
  public schedulingType = this.schedulingTypes[0];

  public radioChangedHandler(value: string): void {
    this.schedulingType = value;
  } 
}
