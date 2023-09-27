import { Component, Input, OnInit, inject } from '@angular/core';
import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { WorkOrderInstrument } from '@allmax-angular/antero-web/entities';
import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import { StateManagementService } from '@allmax-angular/shared/features/state-management';
import { DataStores } from '@allmax-angular/antero-web/types';
import { WorkViewerStorePropNames } from '../../../../work-viewer.schema';
import { NotificationsService } from '@allmax-angular/shared/ui/notifications';

@Component({
  selector: 'ant-work-viewer-instrument-list-item',
  templateUrl: './work-viewer-instrument-list-item.component.html',
  styleUrls: ['./work-viewer-instrument-list-item.component.scss'],
})
export class WorkViewerInstrumentListItemComponent extends ListItemBaseComponent implements OnInit {
  @Input() public record: Nullable<WorkOrderInstrument>;

  public readingBinding = new ObservableBinding<number>();
  public canUpdate = false;

  private messages = inject(NotificationsService);
  private ctrl = inject(CurrentWorkController);

  public ngOnInit(): void {
   if (this.record) {
    this.readingBinding.set(this.record.reading);
   }
   this.readingBinding.value$.subscribe(x => this.canUpdate = !!x && x !== this.record?.reading)
  }

  public async updateReading(): Promise<void> {
    if (this.record && this.readingBinding) {
      const item = { ...this.record, reading: this.readingBinding.value };
      const result = await this.ctrl.updateInstrument(item);
      if (result) {
        this.messages.notify('Reading was entered successfully');
        this.canUpdate = false;
      }
    }
  }
}
