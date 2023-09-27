import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Nullable } from '@allmax-angular/shared/types';
import { MapComponent, MapEventArgs, MapInteractionModes } from '@allmax-angular/shared/ui/map';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, AfterViewInit, OnDestroy, ViewChild, Input } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-equipment-map-panel',
  templateUrl: './equipment-map-panel.component.html',
  styles: [],
})
export class EquipmentMapPanelComponent implements AfterViewInit, OnDestroy  {
  @ViewChild(MapComponent) public mapComponent: Nullable<MapComponent>;
  
  @Input() public height = '100%';

  private subs: Subscription[] = [];
  private selection: Nullable<Equipment>;

  constructor(
    private appStore: AnteroStoreService,
    private ctrl: EquipmentControllerService,
    private store: EquipmentSectionStore
  ) { }
  
  public ngAfterViewInit(): void {
    this.subs.push(this.store.selection$.subscribe(x => {
      if (x !== this.selection && this.mapComponent) {
        this.mapComponent.clearMarkers();
        this.selection = x;
        if (this.selection) {
          if (this.selection.latitude !== null &&
            this.selection.latitude !== undefined &&
            this.selection.longitude !== null &&
            this.selection.longitude !== undefined) {
              this.mapComponent.addMarkerAt({ latitude: this.selection.latitude, longitude: this.selection.longitude }, '');
            }
        }
      }
      this.selection = x;
    }));  
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public async clickHandler(args: MapEventArgs): Promise<void> {
    const { component, point } = args;
    if (component && point && this.selection) {
      const result = await this.ctrl.setMapLocation(this.selection.id, point);
      if (result) {
        component.interactionMode = MapInteractionModes.NORMAL;
        component.addMarkerAt(point, '');
        const record: Equipment = { ...this.selection, latitude: point.latitude, longitude: point.longitude };
        this.store.selection = record;
        this.appStore.refresh = true;
      } 
    }
  }

  public async clearedHandler(args: MapEventArgs): Promise<void> {
    const { component } = args;
    if (component && this.selection) {
      const result = await this.ctrl.clearMapLocation(this.selection.id);
      if (result) {
        component.clearMarkers();
        this.appStore.refresh = true;
      }
    }
  }
}
