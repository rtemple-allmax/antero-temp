import { PartsControllerService } from '@allmax-angular/antero-web/data-access/parts-controller';
import { EquipmentPart, PartQuantity } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { PartStoreService } from '@allmax-angular/antero-web/state-management/part-store';
import { CardBaseComponent, Modals } from '@allmax-angular/antero-web/types';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ant-equipment-part-card',
  templateUrl: './equipment-part-card.component.html',
  styleUrls: ['./equipment-part-card.component.scss'],
})
export class EquipmentPartCardComponent extends CardBaseComponent implements OnInit {
  @Input() public source: Nullable<EquipmentPart>;
  public stockLocations: PartQuantity[] = [];
  
  constructor(
    private antero: AnteroService,
    private eqStore: EquipmentSectionStore,
    private partCtrl: PartsControllerService,
    private partStore: PartStoreService
  ) { super(); }

  public ngOnInit(): void {
    this.options = [
      {
        label: 'Edit',
        icon: this.icons.editIcon,
        clickHandler: () => this.editHandler(),
        danger: false
      },
      {
        label: 'Delete',
        icon: this.icons.deleteIcon,
        clickHandler: () => this.deleteHandler(),
        danger: true
      }
    ];
    this.getStockLocations();
  }

  public async getStockLocations(): Promise<void> {
    if (this.source?.part) {
      // this.stockLocations = await this.partCtrl.getStockLocations(this.source.part, true) as PartQuantity[];
    } 
  }
  
  public showPartViewer() {
    if (this.source?.part) {
      this.partStore.selection = this.source.part;
      this.antero.openModal(Modals.PART_VIEWER);
    }
  }

  public getStockLocation(record: PartQuantity): string {
    return `${ record.warehouse?.name } ${ record.area?.name } (${ record?.currentQuantity } ${ record?.part?.stockingUnit })`;
  }
  
  public editHandler(): void {
    if (this.source) {
      this.eqStore.selectedPart = this.source;
      this.antero.openModal(Modals.EQUIPMENT_ADD_EDIT_PART, CrudFunctions.UPDATE);
    }
  }

  public deleteHandler(): void {
    if (this.source) {
      this.eqStore.selectedPart = this.source;
      this.antero.openModal(Modals.EQUIPMENT_DELETE_PART);
    }
  }
}
