import { WorkOrderData } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-work-order-audit-panel',
  templateUrl: './work-order-audit-panel.component.html',
  styles: [],
})
export class WorkOrderAuditPanelComponent {
  @Input() public height = 'auto'
  @Input() public data: Nullable<WorkOrderData>;
}
