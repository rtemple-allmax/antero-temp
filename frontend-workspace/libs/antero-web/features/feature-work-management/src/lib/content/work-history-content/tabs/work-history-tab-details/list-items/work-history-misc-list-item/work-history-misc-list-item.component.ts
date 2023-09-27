import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkHistoryMisc } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-work-history-misc-list-item',
  templateUrl: './work-history-misc-list-item.component.html',
  styleUrls: ['./work-history-misc-list-item.component.scss'],
})
export class WorkHistoryMiscListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkHistoryMisc>;
}
