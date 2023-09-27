import { SupplierPart } from '@allmax-angular/antero-web/entities';
import { Modals } from '@allmax-angular/antero-web/types';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { Component, Input, OnInit } from '@angular/core';
import { ListItemBaseComponent } from '../list-item.base';

@Component({
  selector: 'ant-supplier-part-list-item',
  templateUrl: './supplier-part-list-item.component.html',
  styleUrls: ['./supplier-part-list-item.component.scss'],
})
export class SupplierPartListItemComponent extends ListItemBaseComponent implements OnInit {
  @Input() public record: Nullable<SupplierPart>;
  @Input() public typeToDisplay: 'supplier' | 'part' = 'supplier';

  public itemContextMenu: any[] = [];

  public ngOnInit(): void {
    this.updateContextMenu();
  }

  public editHandler(): void {
    this.antero.openModal(Modals.SUPPLIER_PART_EDIT, CrudFunctions.UPDATE);
  }

  public deleteHandler(): void {
    this.antero.openModal(Modals.SUPPLIER_PART_DELETE, CrudFunctions.DELETE);
  }

  public openReceiveParts(): void {
    this.antero.openModal(Modals.TOOL_RECEIVE_PARTS);
  }

  public updateContextMenu(): void {
    this.itemContextMenu = [
      {
        text: 'Edit',
        icon: this.icons.editIcon,
        template: 'contextMenuItemTemplate',
        disabled: !this.record,
        danger: false,
        onItemClick: () => this.editHandler()
      },
      {
        text: 'Receive Parts',
        icon: this.icons.partsIcon,
        template: 'contextMenuItemTemplate',
        disabled: !this.record,
        beginGroup: true,
        danger: false,
        onItemClick: () => this.openReceiveParts()
      },
      {
        text: 'Delete',
        icon: this.icons.deleteIcon,
        template: 'contextMenuItemTemplate',
        disabled: !this.record,
        beginGroup: true,
        danger: false,
        onItemClick: () => this.deleteHandler()
      },
    ];
  }
}
