import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkHistoryEquipment } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-work-history-tool-list-item',
  templateUrl: './work-history-tool-list-item.component.html',
  styleUrls: ['./work-history-tool-list-item.component.scss'],
})
export class WorkHistoryToolListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkHistoryEquipment>; 
}
