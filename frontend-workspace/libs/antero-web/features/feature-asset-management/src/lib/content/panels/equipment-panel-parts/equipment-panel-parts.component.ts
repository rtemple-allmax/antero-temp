import { PanelBaseComponent } from '@allmax-angular/antero-web/bases';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { Component, OnInit, inject, Output, EventEmitter } from '@angular/core';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { Sliders } from '../../../types/sliders.enum';
import { combineLatest } from 'rxjs';
import { Nullable } from '@allmax-angular/shared/types';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';


@Component({
  selector: 'ant-equipment-panel-parts',
  templateUrl: './equipment-panel-parts.component.html',
  styleUrls: ['./equipment-panel-parts.component.scss'],
})
export class EquipmentPanelPartsComponent extends PanelBaseComponent implements OnInit {
  @Output() public collapsedStateChanged = new EventEmitter<boolean>(); 

  public override title = 'Parts';

  public record: Nullable<Equipment>;

  private ctrl = inject(EquipmentControllerService);

  public override ngOnInit(): void {
    super.ngOnInit();
    const uiStore = this.state.getStore(DataStores.UI);
    const eqStore = this.state.getStore(DataStores.EQUIPMENT);
    if (uiStore && eqStore) {
      const sub = combineLatest([
        uiStore.observe(UIStorePropNames.VIEW_TYPE),
        eqStore.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT),
        eqStore.observe(EquipmentStatePropNames.OPEN_SLIDER),
        eqStore.observe(EquipmentStatePropNames.REFRESH)
      ]).subscribe(([
        viewType,
        record,
        slider,
        refresh
      ]) => {
        const prevView = this.viewType;
        const prevRecord = this.record;

        this.viewType = viewType;
        this.record = record;

        if (this.viewType !== prevView || this.record !== prevRecord || refresh) {
          this.getData();
        }

        if (refresh) {
          eqStore.setValue(EquipmentStatePropNames.REFRESH, false);
        }

        this.shouldDisable = (!!slider && slider !== Sliders.NONE);
      });
      if (sub) { this.subs.push(sub); }
    }
    this.cdr.detectChanges();
  }

  public async getData(): Promise<void> {
    if (!this.record) { return; }
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.getEquipmentParts(this.record.id, [ 'part.name' ]);
      this.data.colDef.findByDataField('part.name')?.updateOptions({ cellTemplate: 'cellTemplate' });
    } else {
      this.data = await this.ctrl.getEquipmentParts(this.record.id, [
        'part.name',
        'part.description',
        'part.stockingUnit',
        'comment',
        'totalQuantity'
      ]);
    }
  }

  public addHandler(): void {
    this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.PART_ADD);
  }

  public collapsedStateChangeHandler(state: boolean): void {
    this.collapsedStateChanged.emit(state);
  }
}

// @ViewChild(LayoutPanelCollapsibleComponent) public panel: Nullable<LayoutPanelCollapsibleComponent>;
//   @ViewChild(DataTableComponent) public table: Nullable<DataTableComponent>;
//   @ViewChildren('part') public parts: Nullable<QueryList<EquipmentPartListItemComponent>>

//   @Input() public height = '100%';

//   public title = 'Parts';

//   @HostBinding('attr.data-id') public dataID = this.title;

//   private subs: Subscription[] = [];
//   private selectedEquipment: Nullable<Equipment>;
//   public selectedRecord: Nullable<EquipmentPart>;

//   public viewType: MasterDetailViewTypes = MasterDetailViewTypes.LIST;
//   public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;

//   public data: Nullable<TableData>;
//   public icons = { ...allIcons };

//   public partsData: PartData[] = [];

//   public listItems: EquipmentPartListItemComponent[] = [];
  
//   public state = inject(StateManagementService);

//   public get innerHeight(): string {
//     return `calc(${ this.height } - 58px)`;
//   }

//   constructor(
//     private antero: AnteroService,
//     private ctrl: EquipmentControllerService,
//     private eqStore: EquipmentSectionStore,
//     private partStore: PartStoreService,
//     private persistence: PersistenceService,
//     private appStore: AnteroStoreService,
//     private uiStore: UIStoreService
//   ) { }

//   public ngOnInit(): void {
//     this.subs.push(this.appStore.deviceType$.subscribe(x => {
//       this.getData();
//     }))

//     this.subs.push(this.appStore.refresh$.subscribe(x => {
//       if (x) {
//         this.getData();
//         this.appStore.refresh = false;
//       }
//     }))
    
//     this.subs.push(this.eqStore.selection$.subscribe(async (x) => {
//       this.selectedEquipment = x;
//       this.selectedRecord = null;
//       this.getData();
//     }));

//     const sub = this.state.getStore(DataStores.UI)?.observe(UIStorePropNames.VIEW_TYPE).subscribe(x => {
//       this.viewType = x;
//       this.getData();
//     }); 
//     if(sub) {
//       this.subs.push(sub);
//     }
//   }

//   public ngAfterViewInit(): void {
//     const data = this.persistence.get();
//     if (data?.equipmentPanelsCollapsible) {
//       const record = data.equipmentPanelsCollapsible.find(x => x.name === this.title);
//       if (record && this.panel) {
//         this.panel.collapsed = record.collapsed;
//       }
//     }

//     this.listItems = this.parts?.toArray() || [];
//     this.parts?.changes.subscribe( q => this.listItems = q.toArray());
//   }
  
//   public ngOnDestroy(): void {
//     unsubscribe(this.subs);
//   }

//   public addHandler(): void {
//     this.antero.openModal(Modals.EQUIPMENT_ADD_EDIT_PART, CrudFunctions.CREATE);
//   }

//   public editHandler(): void {
//     this.antero.openModal(Modals.EQUIPMENT_ADD_EDIT_PART, CrudFunctions.UPDATE);
//   }

//   public stockLocationsHandler(record: EquipmentPart): void {
//     if (record.part) {
//       this.partStore.selection = record.part;
//     }
//     this.antero.openModal(Modals.PART_STOCK_LOCATIONS);
//   } 
  
//   public deleteHandler(): void {
//     this.antero.openModal(Modals.EQUIPMENT_DELETE_PART);
//   }

//   public selectionHandler(record: EquipmentPart): void {
//     this.eqStore.selectedPart = record;
//     if (record.part) {
//       this.partStore.selection = record.part;
//     }
//     if (this.viewType === MasterDetailViewTypes.TABLE) {
//       this.antero.openModal(Modals.PART_STOCK_LOCATIONS);
//     }
//   }
  
//   public async getData(): Promise<void> {
//     if (!this.selectedEquipment) { return; }
//     if (this.viewType === MasterDetailViewTypes.LIST) {
//       this.data = await this.ctrl.getEquipmentParts(this.selectedEquipment.id, [ 'part.name' ]) as TableData;
//     } else {
//       this.data = await this.ctrl.getEquipmentParts(this.selectedEquipment.id, [
//         'part.name',
//         'part.description',
//         'part.stockingUnit',
//         'comment',
//         'totalQuantity'
//       ]) as TableData;
//     }
//     this.data.colDef.firstVisible?.updateOptions({ cellTemplate: 'cellTemplate' });
//     if (this.selectedEquipment) {
//       this.partsData = await this.ctrl.getPartsData(this.selectedEquipment.id)
//     }
//   }

//   public getUnit(record: EquipmentPart): string {
//     return (record.part?.orderInBulk ? record.part?.bulkUnit : record?.part?.stockingUnit) || 'Qty';
//   }

//   // public contextMenuHandler(e: any): void {
//   //   const record = e.row.data;
//   //   e.items = this.updateContextMenu();
//   //   this.selectionHandler(record);
//   // }

//   // public updateContextMenu(): any[] {
//   //   return [
//   //     {
//   //       text: 'Edit',
//   //       icon: this.icons.editIcon,
//   //       template: 'contextMenuItemTemplate',
//   //       disabled: false,
//   //       danger: false,
//   //       onItemClick: () => this.editHandler()
//   //     },
//   //     {
//   //       icon: this.icons.deleteIcon,
//   //       text: 'Delete',
//   //       template: 'contextMenuItemTemplate',
//   //       disabled: false,
//   //      
//   //   ];
//   // } danger: true,
//   //       onItemClick: () => this.deleteHandler()
//   //     },

//   // public searchHandler(term: string): void {
//   //   this.table?.searchTermChangedHandler(term);
//   // }

//   public collapsedStateChangedHandler(state: boolean) {
//     this.persistence.setEquipmentPanelCollapsibleState(this.title, state);
//   }

//   public closeMenus(): void {
//     this.listItems.forEach(x => x.closeMenu());
//   }
