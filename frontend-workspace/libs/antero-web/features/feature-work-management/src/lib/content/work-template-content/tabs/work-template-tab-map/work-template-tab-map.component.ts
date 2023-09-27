import { TabBaseComponent } from '@allmax-angular/antero-web/bases';
import { DataStores } from '@allmax-angular/antero-web/types';
import { MapComponent } from '@allmax-angular/shared/ui/map';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { WorkStatePropNames } from '../../../../types/store.schema';
import { Nullable } from '@allmax-angular/shared/types';

@Component({
  selector: 'ant-work-template-tab-map',
  templateUrl: './work-template-tab-map.component.html',
  styleUrls: ['./work-template-tab-map.component.scss'],
})
export class WorkTemplateTabMapComponent extends TabBaseComponent implements AfterViewInit {
  @ViewChild(MapComponent) public mapComponent: Nullable<MapComponent>;

  public ngAfterViewInit(): void {
    const sub = this.state.getStore(DataStores.WORK)?.observe(WorkStatePropNames.SELECTED_WORK_TEMPLATE).subscribe(x => {
      if (x && x.equipment && this.mapComponent) {
        this.mapComponent?.clearMarkers();
        if (x.equipment.latitude && x.equipment.longitude) {
          this.mapComponent.addMarkerAt({ latitude: x.equipment.latitude, longitude: x.equipment.longitude }, 'Test');
        }
      }
    });
    if (sub) {
      this.subs.push(sub);
    }
  }
}
