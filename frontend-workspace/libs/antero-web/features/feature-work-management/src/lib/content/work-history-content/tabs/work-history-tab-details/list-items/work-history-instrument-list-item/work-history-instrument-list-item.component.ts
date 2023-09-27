import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkHistoryInstrument } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-work-history-instrument-list-item',
  templateUrl: './work-history-instrument-list-item.component.html',
  styleUrls: ['./work-history-instrument-list-item.component.scss'],
})
export class WorkHistoryInstrumentListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkHistoryInstrument>;
}
