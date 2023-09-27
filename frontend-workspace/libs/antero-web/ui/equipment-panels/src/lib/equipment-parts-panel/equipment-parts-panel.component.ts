import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Equipment, EquipmentPart, PartQuantity } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { PersistenceService } from '@allmax-angular/antero-web/services/persistence';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { PartStoreService } from '@allmax-angular/antero-web/state-management/part-store';
import { UIStoreService } from '@allmax-angular/antero-web/state-management/ui-store';
import { DataStores, Modals, PartData, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { EquipmentPartListItemComponent } from '@allmax-angular/antero-web/ui/equipment-list-items';
import { DataStore, StateManagementService } from '@allmax-angular/shared/features/state-management';
import { CrudFunctions, Nullable, TableData } from '@allmax-angular/shared/types';
import { CardOption } from '@allmax-angular/shared/ui/card';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { LayoutPanelCollapsibleComponent } from '@allmax-angular/shared/ui/layout-panel';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { inject, Component, OnInit, OnDestroy, ViewChild, Input, HostBinding, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';



@Component({
  selector: 'ant-equipment-parts-panel',
  templateUrl: './equipment-parts-panel.component.html',
  styleUrls: [ './equipment-parts-panel.component.scss' ]
})
export class EquipmentPartsPanelComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(LayoutPanelCollapsibleComponent) public panel: Nullable<LayoutPanelCollapsibleComponent>;
  @ViewChild(DataTableComponent) public table: Nullable<DataTableComponent>;
  @ViewChildren('part') public parts: Nullable<QueryList<EquipmentPartListItemComponent>>

  @Input() public height = '100%';

  public title = 'Parts';

  @HostBinding('attr.data-id') public dataID = this.title;

  private subs: Subscription[] = [];
  private selectedEquipment: Nullable<Equipment>;
  public selectedRecord: Nullable<EquipmentPart>;

  public viewType: MasterDetailViewTypes = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;

  public data: Nullable<TableData>;
  public icons = { ...allIcons };

  public partsData: PartData[] = [];

  public listItems: EquipmentPartListItemComponent[] = [];
  
  public state = inject(StateManagementService);

  public get innerHeight(): string {
    return `calc(${ this.height } - 58px)`;
  }

  constructor(
    private antero: AnteroService,
    private ctrl: EquipmentControllerService,
    private eqStore: EquipmentSectionStore,
    private partStore: PartStoreService,
    private persistence: PersistenceService,
    private appStore: AnteroStoreService,
    private uiStore: UIStoreService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.appStore.deviceType$.subscribe(x => {
      this.getData();
    }))

    this.subs.push(this.appStore.refresh$.subscribe(x => {
      if (x) {
        this.getData();
        this.appStore.refresh = false;
      }
    }))
    
    this.subs.push(this.eqStore.selection$.subscribe(async (x) => {
      this.selectedEquipment = x;
      this.selectedRecord = null;
      this.getData();
    }));

    const sub = this.state.getStore(DataStores.UI)?.observe(UIStorePropNames.VIEW_TYPE).subscribe(x => {
      this.viewType = x;
      this.getData();
    }); 
    if(sub) {
      this.subs.push(sub);
    }
  }

  public ngAfterViewInit(): void {
    const data = this.persistence.get();
    if (data?.equipmentPanelsCollapsible) {
      const record = data.equipmentPanelsCollapsible.find(x => x.name === this.title);
      if (record && this.panel) {
        this.panel.collapsed = record.collapsed;
      }
    }

    this.listItems = this.parts?.toArray() || [];
    this.parts?.changes.subscribe( q => this.listItems = q.toArray());
  }
  
  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public addHandler(): void {
    this.antero.openModal(Modals.EQUIPMENT_ADD_EDIT_PART, CrudFunctions.CREATE);
  }

  public editHandler(): void {
    this.antero.openModal(Modals.EQUIPMENT_ADD_EDIT_PART, CrudFunctions.UPDATE);
  }

  public stockLocationsHandler(record: EquipmentPart): void {
    if (record.part) {
      this.partStore.selection = record.part;
    }
    this.antero.openModal(Modals.PART_STOCK_LOCATIONS);
  } 
  
  public deleteHandler(): void {
    this.antero.openModal(Modals.EQUIPMENT_DELETE_PART);
  }

  public selectionHandler(record: EquipmentPart): void {
    this.eqStore.selectedPart = record;
    if (record.part) {
      this.partStore.selection = record.part;
    }
    if (this.viewType === MasterDetailViewTypes.TABLE) {
      this.antero.openModal(Modals.PART_STOCK_LOCATIONS);
    }
  }
  
  public async getData(): Promise<void> {
    if (!this.selectedEquipment) { return; }
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.getEquipmentParts(this.selectedEquipment.id, [ 'part.name' ]) as TableData;
    } else {
      this.data = await this.ctrl.getEquipmentParts(this.selectedEquipment.id, [
        'part.name',
        'part.description',
        'part.stockingUnit',
        'comment',
        'totalQuantity'
      ]) as TableData;
    }
    this.data.colDef.firstVisible?.updateOptions({ cellTemplate: 'cellTemplate' });
    if (this.selectedEquipment) {
      this.partsData = await this.ctrl.getPartsData(this.selectedEquipment.id)
    }
  }

  public getUnit(record: EquipmentPart): string {
    return (record.part?.orderInBulk ? record.part?.bulkUnit : record?.part?.stockingUnit) || 'Qty';
  }

  // public contextMenuHandler(e: any): void {
  //   const record = e.row.data;
  //   e.items = this.updateContextMenu();
  //   this.selectionHandler(record);
  // }

  // public updateContextMenu(): any[] {
  //   return [
  //     {
  //       text: 'Edit',
  //       icon: this.icons.editIcon,
  //       template: 'contextMenuItemTemplate',
  //       disabled: false,
  //       danger: false,
  //       onItemClick: () => this.editHandler()
  //     },
  //     {
  //       icon: this.icons.deleteIcon,
  //       text: 'Delete',
  //       template: 'contextMenuItemTemplate',
  //       disabled: false,
  //      
  //   ];
  // } danger: true,
  //       onItemClick: () => this.deleteHandler()
  //     },

  // public searchHandler(term: string): void {
  //   this.table?.searchTermChangedHandler(term);
  // }

  public collapsedStateChangedHandler(state: boolean) {
    this.persistence.setEquipmentPanelCollapsibleState(this.title, state);
  }

  public closeMenus(): void {
    this.listItems.forEach(x => x.closeMenu());
  }
}
