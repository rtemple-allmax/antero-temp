import { SectionBaseComponent } from '@allmax-angular/antero-web/bases';
import { PartsControllerService } from '@allmax-angular/antero-web/data-access/parts-controller';
import { Part } from '@allmax-angular/antero-web/entities';
import { PartStoreService } from '@allmax-angular/antero-web/state-management/part-store';
import { Modals } from '@allmax-angular/antero-web/types';
import { Nullable } from '@allmax-angular/shared/types';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'ant-section-parts',
  templateUrl: './section-parts.component.html',
  styles: [`
    .cell-more {
      opacity: 0;
    }
    .cell-more.hovered {
      opacity: 1
    }

  `],
})
export class SectionPartsComponent extends SectionBaseComponent implements OnInit {
  public selection: Nullable<Part>;
  public primaryImage: any;
  private ctrl = inject(PartsControllerService);
  private store = inject(PartStoreService);
  
  public override async ngOnInit(): Promise<void> {
    super.ngOnInit();
    this.itemContextMenuItems = this.updateItemContextMenu();
    this.subs.push(this.appStore.deviceType$.subscribe(x => this.deviceType = x));
    this.subs.push(this.store.selection$.subscribe(x => {
      this.selection = x;
      if (this.selection) {
        this.itemContextMenuItems = this.updateItemContextMenu();
      }
    }));
    this.ctrl.initialize();
    this.updateData();
  }
  
  public openAdd(): void {
    this.antero.openModal(Modals.PART_ADD);
  }

  public openEdit(record?: Part): void {
    if (record) {
      this.store.selection = record;
    }
    this.antero.openModal(Modals.PART_EDIT);
  }

  public openCopy(record?: Part): void {
    if (record) {
      this.store.selection = record;
    }
    this.antero.openModal(Modals.PART_COPY);
  }

  public openDelete(record?: Part): void {
    if (record) {
      this.store.selection = record;
    }
    this.antero.openModal(Modals.PART_DELETE);
  }
  
  public openAdjustInventory(): void {
    this.antero.openModal(Modals.TOOL_ADJUST_INVENTORY);
  }
  
  public selectionHandler(selection: any): void {
    this.store.selection = selection;
  }

  public async  updateData(): Promise<void> {
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.get(['name']);
      this.data?.colDef?.findByDataField('name')?.updateOptions({ cellTemplate: 'cellTemplate' });
    } else {
      this.data = await this.ctrl.get([]);
    }
  }

  public async avatarSelectedHandler(file: File): Promise<void> {
    console.log('avatar selected not yet implemented')
    // if (this.selection) {
    //   const addResult = await this.ctrl.addPrimaryImage(this.selection.id, file);
    //   if (addResult) {
    //     this.store.refresh = true;
    //   }
    // } 
  }
  
  public updateItemContextMenu(): any[] {
    const items =  [
      {
        text: 'Edit',
        icon: this.icons.editIcon,
        template: 'contextMenuItemTemplate',
        disabled: !this.selection,
        danger: false,
        onItemClick: () => this.openEdit(this.selection || undefined)
      },
      {
        text: 'Copy To New',
        icon: this.icons.copyIcon,
        template: 'contextMenuItemTemplate',
        disabled: !this.selection,
        danger: false,
        onItemClick: () => this.openCopy(this.selection || undefined)
      },
      {
        text: 'Adjust Inventory',
        icon: this.icons.partsIcon,
        template: 'contextMenuItemTemplate',
        beginGroup: true,
        disabled: false,
        danger: false,
        onItemClick: () => this.openAdjustInventory()
      },
      {
        text: 'Delete',
        beginGroup: true,
        icon: this.icons.deleteIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: true,
        onItemClick: () => this.openDelete()
      }
    ];
    return items;
  }
}
