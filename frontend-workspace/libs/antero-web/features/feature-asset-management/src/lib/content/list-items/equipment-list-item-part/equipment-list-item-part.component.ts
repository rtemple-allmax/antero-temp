import { ListItemBaseComponent } from '@allmax-angular/antero-web/bases';
import { EquipmentPart, PartQuantity } from '@allmax-angular/antero-web/entities';
import { DataStores, ImageData } from '@allmax-angular/antero-web/types';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { Component, OnInit, Input, inject } from '@angular/core';
import { PartsControllerService } from '@allmax-angular/antero-web/data-access/parts-controller';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';

@Component({
  selector: 'ant-equipment-list-item-part',
  templateUrl: './equipment-list-item-part.component.html',
  styleUrls: ['./equipment-list-item-part.component.scss'],
})
export class EquipmentListItemPartComponent extends ListItemBaseComponent implements OnInit {
  @Input() public record: Nullable<EquipmentPart>;
  @Input() public shouldDisable = false;

  public stockLocations: PartQuantity[] = [];
  public primaryImage: Nullable<ImageData>;

  public commentBinding = new ObservableBinding<string>();

  public editing = false;
  public deleting = false;
  
  private ctrl = inject(PartsControllerService);
  private eqCtrl = inject(EquipmentControllerService);

  public get text(): string {
    return `${ this.record?.totalQuantity } ${ this.record?.part?.stockingUnit } in ${ this.stockLocations.length } Location${ this.stockLocations.length > 1 ? 's' : ''}`
  }

  public async ngOnInit(): Promise<void> {
    if (this.record?.partID) {
      this.stockLocations = await this.ctrl.getStockLocationsByID_Raw(this.record.partID);
      this.primaryImage = await this.ctrl.getPrimaryImage(this.record.partID)
    }
  }

  public editHandler(): void {
    if (this.record) {
      this.commentBinding.set(this.record.comment);
    }
    this.editing = true;
  }

  public deleteHandler(): void {
    this.deleting = true;
  }

  public async submit(): Promise<void> {
    if (this.record) {
      const record = { ...this.record, comment: this.commentBinding.value };
      const res = await this.eqCtrl.updatePart(record);
      if (res) {
        this.editing = false;
        this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.REFRESH, true);
      }
    }
  }

  public cancel(): void {
    this.deleting = false;
  }

  public confirm(): void {
    console.log()
  }
}

// @ViewChild(CrudButtonComponent) public crudBtn: Nullable<CrudButtonComponent>;
//   @Input() public record: Nullable<PartData>;
//   @Output() public avatarSelected = new EventEmitter<File>();


//   public popoverTypes: typeof PopoverButtonTypes = PopoverButtonTypes;

//   public moreOptions = [
//     { text: 'Edit', icon: this.icons.editIcon, onItemClick: () => this.editHandler() },
//     { text: 'Delete', icon: this.icons.editIcon, onItemClick: () => this.deleteHandler() },
//   ]

//   public get text(): string {
//     return `${ this.record?.totalQuantity } ${ this.record?.units } in ${ this.record?.stockLocations?.length }`
//   }

//   public get popoverLabel(): string {
//     if (!this.record) { return ''; }
//     return `location${ this.record?.stockLocations.length > 1 ? 's' : ''}`;
//   }

//   // public ngAfterViewInit(): void {
//   //   if (this.el?.nativeElement) {

//   //   }
//   // }

//   public filesSelectedHandler(files: File[]): void {
//     if (files.length > 0) {
//       this.avatarSelected.emit(files[0]);
//     }
//   }

//   public editHandler(): void {
//     if (this.record) {
//       this.store.selectedPartData = this.record;
//       this.antero.openModal(Modals.EQUIPMENT_ADD_EDIT_PART, CrudFunctions.UPDATE);

//     }
//   }

//   public deleteHandler(): void {
//     if (this.record) {
//       this.store.selectedPartData = this.record;
//       this.antero.openModal(Modals.EQUIPMENT_DELETE_PART);
//     }
//   }

//   public closeMenu(): void {
//     this.crudBtn?.close();
//   }
