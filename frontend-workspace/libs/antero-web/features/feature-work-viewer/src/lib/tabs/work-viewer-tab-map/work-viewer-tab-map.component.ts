import { TabBaseComponent } from '@allmax-angular/antero-web/bases';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { MapComponent } from '@allmax-angular/shared/ui/map';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { WorkViewerStorePropNames } from '../../work-viewer.schema';

@Component({
  selector: 'ant-work-viewer-tab-map',
  templateUrl: './work-viewer-tab-map.component.html',
  styleUrls: ['./work-viewer-tab-map.component.scss'],
})
export class WorkViewerTabMapComponent extends TabBaseComponent implements AfterViewInit {
  @ViewChild(MapComponent) public mapComponent: Nullable<MapComponent>;

  public ngAfterViewInit(): void {
    const sub = this.state.getStore(DataStores.VIEWER_WORK)?.observe(WorkViewerStorePropNames.SELECTED_WORK_ORDER).subscribe(x => {
      if (x && this.mapComponent) {
        const record = x.equipment;
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
