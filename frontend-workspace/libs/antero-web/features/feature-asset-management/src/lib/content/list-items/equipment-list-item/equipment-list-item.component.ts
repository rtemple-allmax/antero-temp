import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { DataStores } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { Sliders } from '../../../types/sliders.enum';

@Component({
  selector: 'ant-equipment-list-item',
  templateUrl: './equipment-list-item.component.html',
  styleUrls: ['./equipment-list-item.component.scss'],
})
export class EquipmentListItemComponent extends ListItemBaseComponent implements OnChanges {
  @Input() public record: Nullable<Equipment>;
  
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['record']) {
      this.itemContextMenuItems = this.updateItemContextMenu()
    }
  }

  public updateItemContextMenu(): any[] {
    const items =  [
      {
        text: 'Edit',
        icon: this.icons.editIcon,
        template: 'contextMenuItemTemplate',
        disabled: !this.record,
        danger: false,
        onItemClick: () => this.openSlider(Sliders.EDIT)
      },
      {
        text: 'Copy To New',
        icon: this.icons.copyIcon,
        template: 'contextMenuItemTemplate',
        disabled: !this.record,
        danger: false,
        onItemClick: () => this.openSlider(Sliders.COPY)
      },
      // {
      //   text: 'Create Work Order',
      //   icon: this.icons.activeWorkIcon,
      //   template: 'contextMenuItemTemplate',
      //   disabled: false,
      //   danger: false,
      //   beginGroup: true,
      //   onItemClick: () => console.log('Need Create Work Order Tool potentially managed by viewers service')
      // },
      {
        text: 'Enter Instrument Readings',
        icon: this.icons.instrumentsIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        onItemClick: () => this.openSlider(Sliders.ENTER_READINGS)
      },
      {
        text: this.record?.inServiceStatus ?  'Take Out Of Service' : 'Put in Service',
        icon: this.record?.inServiceStatus ? this.icons.outIcon : this.icons.inIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        onItemClick: () => this.openSlider(Sliders.IN_SERVICE)
      },
      // {
      //   text: 'Retire',
      //   beginGroup: true,
      //   icon: this.icons.zipIcon,
      //   template: 'contextMenuItemTemplate',
      //   disabled: this.record?.retired,
      //   danger: false,
      //   onItemClick: () => this.openSlider(Sliders.RETIRE)
      // },
      // {
      //   text: 'Replace',
      //   icon: this.icons.refreshIcon,
      //   template: 'contextMenuItemTemplate',
      //   disabled: this.record?.retired,
      //   danger: false,
      //   onItemClick: () => this.openSlider(Sliders.REPLACE)
      // },
      // {
      //   text: 'Reactivate',
      //   icon: this.icons.powerIcon,
      //   template: 'contextMenuItemTemplate',
      //   disabled: !this.record?.retired,
      //   danger: false,
      //   onItemClick: () => this.openSlider(Sliders.REACTIVATE)
      // },
      {
        text: 'Delete',
        beginGroup: true,
        icon: this.icons.deleteIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: true,
        onItemClick: () => this.openSlider(Sliders.DELETE)
      },
    ];
    return items;
  }

  public openSlider(slider: Sliders): void {
    const store = this.state.getStore(DataStores.EQUIPMENT);
    if (store) {
      store.setValue(EquipmentStatePropNames.SELECTED_EQUIPMENT, this.record);
      store.setValue(EquipmentStatePropNames.OPEN_SLIDER, slider);
    }
  }
}
