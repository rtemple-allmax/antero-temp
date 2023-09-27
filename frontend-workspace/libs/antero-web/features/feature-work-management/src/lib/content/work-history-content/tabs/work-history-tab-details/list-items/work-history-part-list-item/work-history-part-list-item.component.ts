import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkHistoryPart } from '@allmax-angular/antero-web/entities';
import { ImageData } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-work-history-part-list-item',
  templateUrl: './work-history-part-list-item.component.html',
  styleUrls: ['./work-history-part-list-item.component.scss'],
})
export class WorkHistoryPartListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkHistoryPart>;
  public primaryImage: Nullable<ImageData>;
}
