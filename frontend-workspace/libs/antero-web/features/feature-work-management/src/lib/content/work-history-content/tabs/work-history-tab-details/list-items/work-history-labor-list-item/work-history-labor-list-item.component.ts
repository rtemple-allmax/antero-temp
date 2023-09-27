import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkHistoryLabor } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-work-history-labor-list-item',
  templateUrl: './work-history-labor-list-item.component.html',
  styleUrls: ['./work-history-labor-list-item.component.scss'],
})
export class WorkHistoryLaborListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkHistoryLabor>;
}
