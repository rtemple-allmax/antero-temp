import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkHistory } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-work-history-list-item',
  templateUrl: './work-history-list-item.component.html',
  styleUrls: ['./work-history-list-item.component.scss'],
})
export class WorkHistoryListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkHistory>;
}
