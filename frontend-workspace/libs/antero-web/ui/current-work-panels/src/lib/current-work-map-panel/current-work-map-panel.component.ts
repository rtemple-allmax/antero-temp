import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { CurrentWorkPanelBaseComponent } from '../current-work-panel.base';
import { MapComponent } from '@allmax-angular/shared/ui/map';
import { Nullable } from '@allmax-angular/shared/types';

@Component({
  selector: 'ant-current-work-map-panel',
  templateUrl: './current-work-map-panel.component.html',
  styleUrls: ['./current-work-map-panel.component.scss'],
})
export class CurrentWorkMapPanelComponent extends CurrentWorkPanelBaseComponent implements AfterViewInit {
  @ViewChild(MapComponent) public mapComponent: Nullable<MapComponent>;
  
  @Input() public height = '100%';

  public ngAfterViewInit(): void {
    this.subs.push(this.workStore.selection$.subscribe(x => {
      if (x && x.length > 0 && this.mapComponent) {
        const record = x[0]?.equipment;
        this.mapComponent?.clearMarkers();
        if (record && record.latitude && record.longitude) {
          this.mapComponent.addMarkerAt({ latitude: record.latitude, longitude: record.longitude }, '');
        }
      }
    }));  
  }
}
