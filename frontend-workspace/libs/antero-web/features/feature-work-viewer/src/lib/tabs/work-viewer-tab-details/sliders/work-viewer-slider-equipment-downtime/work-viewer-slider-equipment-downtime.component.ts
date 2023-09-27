import { SliderBaseComponent } from '@allmax-angular/antero-web/bases';
import { DataStores } from '@allmax-angular/antero-web/types';
import { ObservableBinding } from '@allmax-angular/shared/types';
import { AfterViewInit, Component } from '@angular/core';
import { WorkViewerStorePropNames } from '../../../../work-viewer.schema';
import { WorkOrder } from '@allmax-angular/antero-web/entities';

@Component({
  selector: 'ant-work-viewer-slider-equipment-downtime',
  templateUrl: './work-viewer-slider-equipment-downtime.component.html',
  styleUrls: ['./work-viewer-slider-equipment-downtime.component.scss'],
})
export class WorkViewerSliderEquipmentDowntimeComponent extends SliderBaseComponent implements AfterViewInit {
  public startDateBinding = new ObservableBinding<Date>();
  public endDateBinding = new ObservableBinding<Date>();

  public ngAfterViewInit(): void {
    const sub = this.state.getStore(DataStores.VIEWER_WORK)?.observe(WorkViewerStorePropNames.SELECTED_WORK_ORDER)?.subscribe((x: WorkOrder) => {
      this.startDateBinding.set(x.downtimeStart);
      this.endDateBinding.set(x.downtimeEnd);      
    });
    if (sub) { this.subs.push(sub); }
  }
}
