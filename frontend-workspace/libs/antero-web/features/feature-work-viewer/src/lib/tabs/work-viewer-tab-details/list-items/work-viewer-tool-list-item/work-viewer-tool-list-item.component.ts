import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkOrderEquipment } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ant-work-viewer-tool-list-item',
  templateUrl: './work-viewer-tool-list-item.component.html',
  styleUrls: ['./work-viewer-tool-list-item.component.scss'],
})
export class WorkViewerToolListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkOrderEquipment>;
}
