import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkRequest } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ant-work-request-list-item',
  templateUrl: './work-request-list-item.component.html',
  styleUrls: ['./work-request-list-item.component.scss'],
})
export class WorkRequestListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkRequest>;
}
