import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { WorkOrderInstrument } from '@allmax-angular/antero-web/entities';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ant-work-order-instrument-list-item',
  templateUrl: './work-order-instrument-list-item.component.html',
  styleUrls: ['./work-order-instrument-list-item.component.scss'],
})
export class WorkOrderInstrumentListItemComponent extends ListItemBaseComponent implements OnInit {
  @Input() public record: Nullable<WorkOrderInstrument>;

  public ngOnInit(): void {
    console.log('wo instrument', this.record);
  }
}
