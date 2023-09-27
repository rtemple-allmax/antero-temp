import { TabBaseComponent } from '@allmax-angular/antero-web/bases';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { MapComponent } from '@allmax-angular/shared/ui/map';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { WorkStatePropNames } from '../../../../types/store.schema';

@Component({
  selector: 'ant-work-order-tab-map',
  templateUrl: './work-order-tab-map.component.html',
  styleUrls: ['./work-order-tab-map.component.scss'],
})
export class WorkOrderTabMapComponent extends TabBaseComponent implements AfterViewInit {
  @ViewChild(MapComponent) public mapComponent: Nullable<MapComponent>;

  public ngAfterViewInit(): void {
    const sub = this.state.getStore(DataStores.WORK)?.observe(WorkStatePropNames.SELECTED_WORK_ORDERS).subscribe(x => {
      if (x && x.length > 0 && this.mapComponent) {
        const record = x[0]?.equipment;
        this.mapComponent?.clearMarkers();
        if (record && record.latitude && record.longitude) {
          this.mapComponent.addMarkerAt({ latitude: record.latitude, longitude: record.longitude }, '');
        }
      }
    });
    if (sub) {
      this.subs.push(sub);
    }
  }
}
