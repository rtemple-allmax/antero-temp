import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkOrderMisc } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ant-work-viewer-misc-list-item',
  templateUrl: './work-viewer-misc-list-item.component.html',
  styleUrls: ['./work-viewer-misc-list-item.component.scss'],
})
export class WorkViewerMiscListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkOrderMisc>;
}
