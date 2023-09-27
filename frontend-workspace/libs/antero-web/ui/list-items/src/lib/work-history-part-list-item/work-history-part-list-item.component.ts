import { WorkHistory, WorkHistoryPart } from '@allmax-angular/antero-web/entities';
import { Modals } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';
import { ListItemBaseComponent } from '../list-item.base';
import { WorkHistoryListItemBaseComponent } from '../work-history-list-item.base';

@Component({
  selector: 'ant-work-history-part-list-item',
  templateUrl: './work-history-part-list-item.component.html',
  styleUrls: ['./work-history-part-list-item.component.scss'],
})
export class WorkHistoryPartListItemComponent extends WorkHistoryListItemBaseComponent {
  @Input() public record: Nullable<WorkHistoryPart>;

  public get workOrderNumberLabel(): string {
    return `WO# ${ this.record?.workHistory?.workOrderNumber }`;
  }

  public openWorkHistoryViewer(record: Nullable<WorkHistory>): void {
    if (record) {
      this.historyStore.selection = record;
    }
    this.antero.openModal(Modals.WORK_HISTORY_VIEWER);
  }
}
