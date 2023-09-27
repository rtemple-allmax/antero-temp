import { DataStores, Modals, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { AfterViewInit, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { insert, isNullOrEmpty  } from '@allmax-angular/shared/utils';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { CustomFieldNames, Equipment, EquipmentDocument } from '@allmax-angular/antero-web/entities';
import { CrudFunctions, DeviceTypes, Nullable } from '@allmax-angular/shared/types';
import DataSource from 'devextreme/data/data_source';
import { SectionBaseComponent } from '@allmax-angular/antero-web/bases';

@Component({
  selector: 'ant-equipment',
  templateUrl: './antero-section-equipment.component.html',
  styleUrls: [ './antero-section-equipment.component.scss' ]
})
export class AnteroSectionEquipmentComponent extends SectionBaseComponent implements OnInit, OnDestroy { 
  public includeRetired = false;
  
  public listGroupByProps: any[] = [
    { displayName: 'Category', propname: 'category.name' },
    { displayName: 'Criticality Ranking', propname: 'criticalityRanking.name' },
    { displayName: 'Condition', propname: 'equipmentCondition.name' },
    { displayName: 'Consequence of Failure', propname: 'consequenceOfFailure' },
    { displayName: 'Department', propname: 'department.name' },
    { displayName: 'Group', propname: 'group.name' },
    { displayName: 'In Service Status', propname: 'inServiceStatus' },
    { displayName: 'Location', propname: 'location.name' },
    { displayName: 'Manufacturer', propname: 'manufacturer.name' },
    { displayName: 'Priority', propname: 'equipmentPriority.name' },
    { displayName: 'Probability of Failure', propname: 'probabilityOfFailure' },
    { displayName: 'Retired', propname: 'retired' },
    { displayName: 'Sublocation', propname: 'sublocation.name' },
    { displayName: 'Type', propname: 'equipmentType.name' },
    { displayName: 'Vendor', propname: 'vendor.name' },
  ]
  
  public selection: Nullable<Equipment>;

  public customLabels: Nullable<CustomFieldNames>;
  
  public workOrders: Nullable<DataSource>;
  public procedures: Nullable<DataSource>;
  public workHistory: Nullable<DataSource>;
  public procedureHistory: Nullable<DataSource>;
  
  // public openModal = Modals.NONE;
  // public modals: typeof Modals = Modals;
  
  public primaryImage: any;
  public documents: EquipmentDocument[] = [];

  private ctrl = inject(EquipmentControllerService);
  private eqStore = inject(EquipmentSectionStore);
  
  public get initalColumns(): any[] {
    return this.viewType === this.viewTypes.LIST ? [ 'name' ] : [ ]
  }
  
  public get avatar(): string {
    if (this.primaryImage) {
      return this.primaryImage.thumbnailURL
    } else {
      return '/assets/icons/iconNoImage.svg'
    }
  }

  public get hasDescription(): boolean {
    return !isNullOrEmpty(this.selection?.description);
  }
  
  public override async ngOnInit(): Promise<void> {
    super.ngOnInit();
    this.updateData();
    this.data = await this.ctrl.get(this.initalColumns, this.includeRetired);

    this.subs.push(this.eqStore.includeRetired$.subscribe(async (x) => {
      this.includeRetired = x;
      this.updateData();
    }));
    
    this.subs.push(this.eqStore.selection$.subscribe(async (x) => {
      this.selection = x;
      if (this.selection) {
        this.documents = await this.ctrl.getDocuments_Raw(this.selection.id);
        this.itemContextMenuItems = this.updateItemContextMenu(this.selection);
        this.sectionContextMenuItems = this.updateSectionContextMenu();
      }
      this.updatePrimaryImage();
    }));

    this.subs.push(this.appStore.refresh$.subscribe(async (state: boolean) => {
      if (state) {
        this.updateData();
        this.updatePrimaryImage();
        if (this.selection) {
          this.documents = await this.ctrl.getDocuments_Raw(this.selection.id);
        }
        this.appStore.refresh = false;
      }
    }))

    this.subs.push(this.appStore.deviceType$.subscribe(x => this.deviceType = x));

    const sub = this.state.getStore(DataStores.UI)?.observe(UIStorePropNames.VIEW_TYPE)?.subscribe(x => {
      this.viewType = x;
      this.updateData();
      if (this.selection) {
        this.sectionContextMenuItems = this.updateSectionContextMenu();
      }
    })

    if (sub) {
      this.subs.push(sub);
    }

  }
  
  public override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.eqStore.reset();
  }
  
  public selectionChangedHandler(record: Equipment): void {
    this.eqStore.selection = record;
  }

  public override tableReadyHandler(e: any): void {
    if (this.deviceType !== DeviceTypes.MOBILE) {
      const selectedKeys: number[] = e.component.getSelectedRowKeys();
      if (!this.selection && selectedKeys.length < 1) {
        e.component.selectRowsByIndexes([0]);
        e.component.getScrollable().scrollTo(0);
      } else if (this.selection  && !selectedKeys.includes(this.selection.id)) {
        e.component.selectRows([this.selection.id], false);
        e.component.navigateToRow(this.selection.id);
      }
    }
  }
  
  public async openAdd(record?: Equipment): Promise<void> {
    if (record) {
      this.eqStore.selection = record;
    }
    this.antero.openModal(Modals.EQUIPMENT_ADD, CrudFunctions.CREATE);
  }

  public async openEdit(record?: Equipment): Promise<void> {
    if (record) {
      this.eqStore.selection = record;
    } else if (!this.selection) {
      return;
    } 
    this.antero.openModal(Modals.EQUIPMENT_EDIT, CrudFunctions.UPDATE);
  }

  public async openCopy(record?: Equipment): Promise<void> {
    if (record) {
      this.eqStore.selection = record;
    }
    this.antero.openModal(Modals.EQUIPMENT_COPY, CrudFunctions.COPY);
  }

  public openDelete(record?: Equipment): void {
    if (record) {
      this.eqStore.selection = record;
    } else if (!this.selection) {
      return;
    } 
    this.antero.openModal(Modals.EQUIPMENT_DELETE);
  }

  public openInServiceToggle(record?: Equipment): void {
    if (record) {
      this.eqStore.selection = record;
    } else if (!this.selection) {
      return;
    }
    this.antero.openModal(Modals.EQUIPMENT_IN_SERVICE_TOGGLE);
  }

  public openInServiceHistory(): void {
    if (!this.selection) { return; }
    this.antero.openModal(Modals.EQUIPMENT_IN_SERVICE_HISTORY);
  }

  public openRetire(record?: Equipment): void {
    if (record) {
      this.eqStore.selection = record;
    } else if (!this.selection) {
      return;
    }
    this.antero.openModal(Modals.EQUIPMENT_RETIRE);
  }

  public openReplace(record?: Equipment): void {
    if (record) {
      this.eqStore.selection = record;
    } else if (!this.selection) {
      return;
    }
    this.antero.openModal(Modals.EQUIPMENT_REPLACE);
  }

  public openReactivate(record?: Equipment): void {
    if (record) {
      this.eqStore.selection = record;
    } else if (!this.selection) {
      return;
    }
    this.antero.openModal(Modals.EQUIPMENT_REACTIVATE);
  }

  public openCreateWorkOrder(record?: Equipment): void {
    if (record) {
      this.eqStore.selection = record;
    } else if (!this.selection) {
      return;
    } 
    this.antero.openModal(Modals.TOOL_CREATE_WORK_ORDER);
  }

  public openEnterReadings(record?: Equipment): void {
    if (record) {
      this.eqStore.selection = record;
    } else if (!this.selection) {
      return;
    } 
    this.antero.openModal(Modals.TOOL_ENTER_READINGS);
  }

  public openEnterReadings_Contextless(): void {
    this.antero.openEnterReadings(false)
  }

  public openEquipmentLists(): void {
    this.antero.openModal(Modals.EQUIPMENT_LISTS);
  }

  public openCutomFields(): void {
    this.antero.openModal(Modals.EQUIPMENT_ADD_EDIT_CUSTOM_FIELDS);
  }
  
  public async toggleRetired(): Promise<void> {
    this.includeRetired = !this.includeRetired;
    await this.updateData();
    if (this.groupedProp) {
      this.masterTable?.clearGrouping()
      this.masterTable?.updateColumn(this.groupedProp, 'groupIndex', 0);
    }
  }

  public async useMyView(): Promise<void> {
    this.updateData();
  }
  
  public getMobileAvatar(): string {
    if (this.primaryImage) {
      return `url(${ this.primaryImage.imageUrl})`
    }
    return 'url(assets/icons/noImage.svg)';
  }
  
  public async avatarSelectedHandler(file: File): Promise<void> {
    if (this.selection) {
      const addResult = await this.ctrl.addPrimaryImage(this.selection.id, file);
      if (addResult) {
        this.appStore.refresh = true;
      }
    } 
  }

  public async updateData(): Promise<void> {
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.get(['name'], this.includeRetired);
      this.data.colDef?.findByDataField('name')?.updateOptions({
          cellTemplate: 'cellTemplate',
          caption: 'Name & Description',
          width: 'calc(50ch + var(--space-lg))'
        });
    } else if (this.viewType === MasterDetailViewTypes.TABLE) {
      this.data = await this.ctrl.get([], this.includeRetired);
      this.updatingData = false;
    }
  }

  public async updatePrimaryImage(): Promise<void> {
    if (this.selection) {
      this.primaryImage = await this.ctrl.getPrimaryImage(this.selection.id)
    }
  }

  public contextMenuHandler(e: any): void {
    const record = e.row.data;
    e.items = this.updateItemContextMenu(record);
    this.selectionChangedHandler(record);
    console.log('context menu preparing', e)
  }

  public updateSectionContextMenu(): any[] {
    let items =  [
      {
        text: 'Equipment Lists',
        icon: this.icons.subListIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        onItemClick: () => this.openEquipmentLists()
      },
      {
        text: 'Manage Custom Fields',
        icon: this.icons.rectangleListIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        onItemClick: () => this.openCutomFields()
      },
      {
        text: 'Enter Instrument Readings',
        icon: this.icons.instrumentsIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        beginGroup: true,
        onItemClick: () => this.openEnterReadings_Contextless()
      },
      {
        text: 'Group By',
        icon: this.icons.objectGroupIcon,
        template: 'contextMenuSlideoutItemTemplate',
        disabled: false,
        danger: false,
        beginGroup: true,
        subItems: this.listGroupByProps,
        onItemClick: (name: string) => this.groupBy(name)
      },
      {
        text: 'Expand All Groups',
        icon: this.icons.swneIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        onItemClick: () => this.expandAllGroups()
      },
      {
        text: 'Collapse All Groups',
        icon: this.icons.swneCenterIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        onItemClick: () => this.collapseAllGroups()
      },
      {
        text: 'Clear Grouping',
        icon: this.icons.ungroupIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        onItemClick: () => this.clearGrouping()
      },
      {
        text: this.includeRetired ? 'Exclude Retired' : 'Include Retired',
        icon: this.icons.zipIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        beginGroup: true,
        onItemClick: () => this.toggleRetired()
      }
    ]
    if (this.viewType === MasterDetailViewTypes.TABLE) {
      items = insert(items, 3, 
        {
          text: 'Show Column Chooser',
          icon: this.icons.subListIcon,
          template: 'contextMenuItemTemplate',
          disabled: false,
          beginGroup: true,
          danger: false,
          onItemClick: () => this.showColumnChooser()
        }
      )
    }
    return items;
  }

  public updateItemContextMenu(record: Equipment): any[] {
    const items =  [
      {
        text: 'Edit',
        icon: this.icons.editIcon,
        template: 'contextMenuItemTemplate',
        disabled: !record,
        danger: false,
        onItemClick: () => this.openEdit(this.selection || undefined)
      },
      {
        text: 'Copy To New',
        icon: this.icons.copyIcon,
        template: 'contextMenuItemTemplate',
        disabled: !record,
        danger: false,
        onItemClick: () => this.openCopy(this.selection || undefined)
      },
      {
        text: 'Create Work Order',
        icon: this.icons.activeWorkIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        beginGroup: true,
        onItemClick: () => this.openCreateWorkOrder()
      },
      {
        text: 'Enter Instrument Readings',
        icon: this.icons.instrumentsIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        onItemClick: () => this.openEnterReadings()
      },
      {
        text: record?.inServiceStatus ?  'Take Out Of Service' : 'Put in Service',
        icon: record?.inServiceStatus ? this.icons.outIcon : this.icons.inIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        onItemClick: () => this.openInServiceToggle()
      },
      {
        text: 'Retire',
        beginGroup: true,
        icon: this.icons.zipIcon,
        template: 'contextMenuItemTemplate',
        disabled: record?.retired,
        danger: false,
        onItemClick: () => this.openRetire()
      },
      {
        text: 'Replace',
        icon: this.icons.refreshIcon,
        template: 'contextMenuItemTemplate',
        disabled: !record?.retired,
        danger: false,
        onItemClick: () => this.openReplace()
      },
      {
        text: 'Reactivate',
        icon: this.icons.powerIcon,
        template: 'contextMenuItemTemplate',
        disabled: !record?.retired,
        danger: false,
        onItemClick: () => this.openReactivate()
      },
      {
        text: 'Delete',
        beginGroup: true,
        icon: this.icons.deleteIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: true,
        onItemClick: () => this.openDelete()
      },
    ];
    return items;
  }

  public getEquipmentLabel(record: Nullable<Equipment>): string{
    if (record) {
      return `${ record.name }${ record.retired ? ' (Retired)': ''}`
    }
    return '';
  }

  public getInServiceLabel(record: Nullable<Equipment>): string {
    if (!record) {
      return '';
    }
    return record.inServiceStatus ? `Take Out Of Service`: 'Put In Service';
  }
}
