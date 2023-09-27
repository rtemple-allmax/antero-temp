import { PersistentDataKeys } from '@allmax-angular/antero-web/services/persistence';
import { Modals } from '@allmax-angular/antero-web/types';
import { CrudFunctions, MyDataField, MyDataFieldTypes, Nullable } from '@allmax-angular/shared/types';
import { AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import { EquipmentPanelBaseComponent } from '../equipment-panel.base';
import Sortable from 'sortablejs';
import { Equipment } from '@allmax-angular/antero-web/entities';

@Component({
  selector: 'ant-equipment-my-data-panel',
  templateUrl: './equipment-my-data-panel.component.html',
  styleUrls: ['./equipment-my-data-panel.component.scss'],
})
export class EquipmentMyDataPanelComponent extends EquipmentPanelBaseComponent implements AfterViewInit {
  @ViewChild('sortable') public el: Nullable<ElementRef<HTMLDivElement>>;

  public fields: Array<MyDataField> = [];

  public override title = 'My Data';

  @HostBinding('attr.data-id') public override dataID = this.title;
  
  public sorter: Nullable<Sortable>;

  public ngAfterViewInit(): void {
    if (this.el?.nativeElement) {
      this.sorter = Sortable.create(
        this.el.nativeElement,
        { 
          animation: 350,
          forceFallback: true, 
          // onEnd: () => this.update(),
        }
      );
      this.initialize();
    }
    this.update();
    this.persistence.changed.subscribe(() => this.update());
    const data = this.persistence.get();
    if (data?.equipmentPanelsCollapsible) {
      const record = data.equipmentPanelsCollapsible.find(x => x.name === this.title);
      if (record && this.panel) {
        this.panel.collapsed = record.collapsed;
      }
    }
  }
  
  

  public update(): void {
    const data = this.persistence.get();
    if (data) {
      this.fields = data[PersistentDataKeys.EQUIPMENT_MY_DATA];
      // if (this.sorter) {
      //   this.persistence.set(PersistentDataKeys.EQUIPMENT_MY_DATA_ORDER, this.sorter.toArray())
      // }
    }
    this.cdr.detectChanges();
  }

  public editHandler(): void {
    this.antero.openModal(Modals.EQUIPMENT_EDIT_MY_DATA, CrudFunctions.UPDATE);
  }

  public collapsedStateChangedHandler(state: boolean) {
    this.persistence.setEquipmentPanelCollapsibleState(this.title, state);
  }

  public initialize(): void {
    console.log('sorter init', this.sorter);
    // if (this.sorter) {
    //   const data = this.persistence.get();
    //   console.log('sorter init data', data);
    //   if (data?.equipmentPanelsOrder) {
    //     if (data.equipmentPanelsOrder.length === 0) {
    //       this.persistence.set(PersistentDataKeys.EQUIPMENT_PANELS_ORDER, this.sorter.toArray());
    //       console.log('sorter init should save initial sort');
    //     } else {
    //       this.sorter.sort(data.equipmentPanelsOrder);
    //       console.log('sorter init should sort by saved data');
    //     }
    //   }
    // }
  }
}
