import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkOrder } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ant-work-template-work-order-list-item',
  templateUrl: './work-template-work-order-list-item.component.html',
  styleUrls: ['./work-template-work-order-list-item.component.scss'],
})
export class WorkTemplateWorkOrderListItemComponent extends ListItemBaseComponent implements AfterViewInit {
  @Input() public record: Nullable<WorkOrder>;

  public ngAfterViewInit(): void {
    console.log('wtwo status', this.record?.workStatus )
  }
}
