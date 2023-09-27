import { TabBaseComponent } from '@allmax-angular/antero-web/bases';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { MapComponent, MapEventArgs, MapInteractionModes } from '@allmax-angular/shared/ui/map';
import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';

@Component({
  selector: 'ant-equipment-tab-map',
  templateUrl: './equipment-tab-map.component.html',
  styleUrls: ['./equipment-tab-map.component.scss'],
})
export class EquipmentTabMapComponent extends TabBaseComponent implements AfterViewInit {
  @ViewChild(MapComponent) public mapComponent: Nullable<MapComponent>;

  private record: Nullable<Equipment>;

  private ctrl = inject(EquipmentControllerService);
  
  public ngAfterViewInit(): void {
    const sub = this.state.getStore(DataStores.EQUIPMENT)
    ?.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT)
    ?.subscribe(record => {
      const prevRecord = this.record;
      this.record = record;
      if (this.record && this.record !== prevRecord) {
        const { latitude, longitude  } = this.record;
        if (latitude && longitude) {
          this.mapComponent?.addMarkerAt({ latitude, longitude }, '');
        }
      }
    });
    if (sub) { this.subs.push(sub); }



    // this.subs.push(this.store.selection$.subscribe(x => {
    //   if (x !== this.selection && this.mapComponent) {
    //     this.mapComponent.clearMarkers();
    //     this.selection = x;
    //     if (this.selection) {
    //       if (this.selection.latitude !== null &&
    //         this.selection.latitude !== undefined &&
    //         this.selection.longitude !== null &&
    //         this.selection.longitude !== undefined) {
    //           this.mapComponent.addMarkerAt({ latitude: this.selection.latitude, longitude: this.selection.longitude });
    //         }
    //     }
    //   }
    //   this.selection = x;
    // }));  
  }
  
  public async clickHandler(args: MapEventArgs): Promise<void> {
    const { component, point } = args;
    if (component && point && this.record) {
      const result = await this.ctrl.setMapLocation(this.record.id, point);
      if (result) {
        component.interactionMode = MapInteractionModes.NORMAL;
        component.addMarkerAt(point, 'Test');
        const record: Equipment = { ...this.record, latitude: point.latitude, longitude: point.longitude };
        const store = this.state.getStore(DataStores.EQUIPMENT);
        store?.setValue(EquipmentStatePropNames.SELECTED_EQUIPMENT, record)
        store?.setValue(EquipmentStatePropNames.REFRESH, true);
        // this.store.selection = record;
        // this.appStore.refresh = true;
      } 
    }
  }

  public async clearedHandler(args: MapEventArgs): Promise<void> {
    const { component } = args;
    if (component && this.record) {
      const result = await this.ctrl.clearMapLocation(this.record.id);
      if (result) {
        component.clearMarkers();
        // this.appStore.refresh = true;
        this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.REFRESH, true);
      }
    }
  }
}
