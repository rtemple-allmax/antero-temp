import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkOrder } from '@allmax-angular/antero-web/entities';
import { ViewersService } from '@allmax-angular/antero-web/services/viewers-service';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, inject } from '@angular/core';

@Component({
  selector: 'ant-work-order-list-item',
  templateUrl: './work-order-list-item.component.html',
  styleUrls: ['./work-order-list-item.component.scss'],
})
export class WorkOrderListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkOrder>;

  private viewers = inject(ViewersService);

  public items = [
    {
      text: 'Show In Viewer',
      template: 'contextMenuItemTemplate',
      onItemClick: () => this.showInViewer()
    },
  ]
  
  public openAdd(): void {
    console.log('one completion form');
  }

  public showInViewer(): void {
    this.viewers.openWorkViewer(this.record);
  }
}
