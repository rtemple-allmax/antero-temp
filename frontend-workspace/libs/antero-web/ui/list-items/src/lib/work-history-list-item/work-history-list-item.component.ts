import { WorkHistory } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit, Input } from '@angular/core';
import { ListItemBaseComponent } from '../list-item.base';

@Component({
  selector: 'ant-work-history-list-item',
  templateUrl: './work-history-list-item.component.html',
  styleUrls: ['./work-history-list-item.component.scss'],
})
export class WorkHistoryListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkHistory>;

  public get workOrderNumberLabel(): string {
    return `#${ this.record?.workOrderNumber }`;
  }
}
