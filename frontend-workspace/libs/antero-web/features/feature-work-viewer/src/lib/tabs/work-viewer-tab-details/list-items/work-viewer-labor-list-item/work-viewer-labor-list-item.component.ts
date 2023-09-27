import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkOrderLabor } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ant-work-viewer-labor-list-item',
  templateUrl: './work-viewer-labor-list-item.component.html',
  styleUrls: ['./work-viewer-labor-list-item.component.scss'],
})
export class WorkViewerLaborListItemComponent extends ListItemBaseComponent {
  @Input() public record: Nullable<WorkOrderLabor>;
}
