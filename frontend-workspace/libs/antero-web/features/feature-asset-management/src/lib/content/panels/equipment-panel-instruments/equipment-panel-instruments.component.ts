import { PanelBaseComponent } from '@allmax-angular/antero-web/bases';
import { DataStores, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { Component, OnInit, inject, Output, EventEmitter } from '@angular/core';
import { combineLatest } from 'rxjs';
import { EquipmentStatePropNames } from '../../../types/store.schema';
import { Nullable } from '@allmax-angular/shared/types';
import { Equipment, Instrument } from '@allmax-angular/antero-web/entities';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { Sliders } from '../../../types/sliders.enum';

@Component({
  selector: 'ant-equipment-panel-instruments',
  templateUrl: './equipment-panel-instruments.component.html',
  styleUrls: ['./equipment-panel-instruments.component.scss'],
})
export class EquipmentPanelInstrumentsComponent extends PanelBaseComponent implements OnInit {
  @Output() public collapsedStateChanged = new EventEmitter<boolean>(); 

  public override title = 'Instruments';

  public record: Nullable<Equipment>;
  private ctrl = inject(EquipmentControllerService);

  public override ngOnInit(): void {
    super.ngOnInit();
    const uiStore = this.state.getStore(DataStores.UI);
    const eqStore = this.state.getStore(DataStores.EQUIPMENT);
    if (eqStore && uiStore) {
      const sub = combineLatest([
        uiStore.observe(UIStorePropNames.VIEW_TYPE),
        eqStore.observe(EquipmentStatePropNames.SELECTED_EQUIPMENT),
        eqStore.observe(EquipmentStatePropNames.REFRESH)
      ]).subscribe(([
        viewType,
        record,
        refresh
      ]) => {
        const prevView = this.viewType;
        const prevRecord = this.record;

        this.viewType = viewType;
        this.record = record;

        if (this.viewType !== prevView || this.record !== prevRecord || refresh) {
          this.getData();
          eqStore.setValue(EquipmentStatePropNames.SELECTED_INSTRUMENT, null);
        }

        if (refresh) {
          eqStore.setValue(EquipmentStatePropNames.REFRESH, false);
        }
      });
      if (sub) { this.subs.push(sub); }
    }
  }

  public async getData(): Promise<void> {
    if (!this.record) { return; }
    if (this.viewType === MasterDetailViewTypes.LIST) {
      this.data = await this.ctrl.getInstruments(this.record.id, [ 'name' ]);
      this.data?.colDef?.findByDataField('name')?.updateOptions({ cellTemplate: 'cellTemplate' });
    } else {
      this.data = await this.ctrl.getInstruments(this.record.id, [
        'name',
        'intrumentType',
        'units',
        'lastReading',
        'rollOver'
      ]);
    }
  }

  public addHandler(): void {
    this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.OPEN_SLIDER, Sliders.INSTRUMENT_ADD);
  }

  public selectionChangedHandler(record: Instrument): void {
    this.state.getStore(DataStores.EQUIPMENT)?.setValue(EquipmentStatePropNames.SELECTED_INSTRUMENT, record);
  }

  public test(): void {
    console.log('testing expandable form')
  }

  public collapsedStateChangeHandler(state: boolean): void {
    this.collapsedStateChanged.emit(state);
  }
}

// @ViewChild(DataTableComponent) public table: Nullable<DataTableComponent>;
//   @ViewChild(LayoutPanelCollapsibleComponent) public panel: Nullable<LayoutPanelCollapsibleComponent>;
//   @ViewChildren('instrument') public instrumentsItems: Nullable<QueryList<InstrumentListItemComponent>>;
//   // @ViewChild('instrumentsTable') public instrumentsTable: Nullable<DataTableComponent>;

//   @Input() public height = '100%';

//   public title = 'Instruments';

//   @HostBinding('attr.data-id') public dataID = this.title;

//   private subs: Subscription[] = [];

//   private record: Nullable<Equipment>;
//   public selectedInstrument: Nullable<Instrument>;
//   public selectedReading: Nullable<Reading>;
  
//   public instrumentsData: Nullable<TableData>
//   public readingsData: Nullable<TableData>;

//   public instruments: Instrument[] = [];
//   public readings: Reading[] = [];

//   public listItems: InstrumentListItemComponent[] = [];
  
//   public icons = { ...allIcons };

//   public hovered = false;

//   public get innerHeight(): string {
//     return `calc(${ this.height } - 58px)`
//   }

//   public viewType: MasterDetailViewTypes = MasterDetailViewTypes.LIST;
//   public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;

//   public state = inject(StateManagementService);
  
//   constructor(
//     private ctrl: EquipmentControllerService,
//     private store: EquipmentSectionStore,
//     private appStore: AnteroStoreService,
//     private antero: AnteroService,
//     private uiStore: UIStoreService,
//     private persistence: PersistenceService
//   ) { }

//   public async ngOnInit(): Promise<void> {
//     this.subs.push(this.store.selection$.subscribe(async (x) => {
//       this.selectedEquipment = x;
//       this.getData()
//     }));
//     this.subs.push(this.store.selectedInstrument$.subscribe(x => this.selectedInstrument = x))
    
//     this.subs.push(this.appStore.refresh$.subscribe(async (state) => {
//       if (state) {
//         this.getData();
//       }
//     }));

//     const sub = this.state.getStore(DataStores.UI)?.observe(UIStorePropNames.VIEW_TYPE).subscribe(x => {
//       this.viewType = x;
//       this.getData();
//     });
//     if (sub) {
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

//     this.listItems = this.instrumentsItems?.toArray() || [];
//     this.instrumentsItems?.changes.subscribe( q => this.listItems = q.toArray());
//   }
  
//   public ngOnDestroy(): void {
//     unsubscribe(this.subs);
//   }

//   public async getData(): Promise<void> {
//     if (!this.selectedEquipment) { return; }
//     if (this.viewType === MasterDetailViewTypes.LIST) {
//       const data = await this.ctrl.getInstruments(this.selectedEquipment.id, [ 'name' ]) as TableData;
//       this.instrumentsData = data;
//     } else {
//       const data = await this.ctrl.getInstruments(this.selectedEquipment.id, [
//         'name',
//         'intrumentType',
//         'units',
//         'lastReading',
//         'rollOver'
//       ]) as TableData;
//       this.instrumentsData = data;
//     }
//     this.instrumentsData?.colDef?.findByDataField('name')?.updateOptions({ cellTemplate: 'cellTemplate' });
//   }

  

//   public instrumentSelectionHandler(record: Instrument): void {
//     this.store.selectedInstrument = record;
//     if (this.viewType === MasterDetailViewTypes.TABLE) {
//       this.readingsHistoryHandler();
//     }
//   }

//   public readingSelectionHandler(record: Reading): void {
//     this.store.selectedReading = record;
//   }
  
//   public contextMenuHandler(e: any): void {
//     const record = e.row.data;
//     e.items = this.updateContextMenu();
//     this.instrumentSelectionHandler(record);
//   }

//   public updateContextMenu(): any[] {
//     return [
//       {
//         text: 'Enter Readings',
//         icon: this.icons.instrumentsIcon,
//         template: 'contextMenuItemTemplate',
//         disabled: false,
//         danger: false,
//         onItemClick: () => this.enterReadingsHandler()
//       },
//       {
//         text: 'Show History',
//         icon: this.icons.historyIcon,
//         template: 'contextMenuItemTemplate',
//         disabled: false,
//         danger: false,
//         onItemClick: () => this.readingsHistoryHandler()
//       },
//       {
//         text: 'Edit',
//         icon: this.icons.editIcon,
//         template: 'contextMenuItemTemplate',
//         disabled: false,
//         danger: false,
//         onItemClick: () => this.editHandler()
//       },
//       {
//         text: 'Delete',
//         icon: this.icons.deleteIcon,
//         template: 'contextMenuItemTemplate',
//         disabled: false,
//         danger: true,
//         onItemClick: () => this.deleteHandler()
//       },
//     ];
//   }

//   public addHandler(): void {
//     this.antero.openModal(Modals.EQUIPMENT_ADD_EDIT_INSTRUMENT, CrudFunctions.CREATE);
//   }
  
//   public enterReadingsHandler(): void {
//     this.antero.openEnterReadings(true);
//   }

//   public readingsHistoryHandler(): void {
//     this.antero.openModal(Modals.EQUIPMENT_READINGS_HISTORY);
//   }

//   public editHandler(): void {
//     this.antero.openModal(Modals.EQUIPMENT_ADD_EDIT_INSTRUMENT, CrudFunctions.UPDATE);
//   }

//   public deleteHandler(): void {
//     this.antero.openModal(Modals.EQUIPMENT_DELETE_INSTRUMENT);
//   }

//   public mouseenterHandler(): void {
//     if (!this.hovered) {
//       this.hovered = true;
//     }
//   }

//   public mouseleaveHandler(): void {
//     if (this.hovered) {
//       this.hovered = false;
//     }
//   }

//   public getInstrumentType(type: InstrumentTypes): string {
//     return instrumentTypesToLabelsMap.get(type) as string;
//   }
  
//   public getDateTimeString(val: any): string {
//     return getDateTimeString(val);
//   }
  
//   public getReadingData(record: Instrument): string {
//     if (record.lastReading) {
//       return `${ record.lastReading } ${ record.units } - ${ this.getDateTimeString(record.lastReadingDate)}`;
//     }
//     return 'No Readings have been entered for this Instrument.';
//   }
  
//   public searchHandler(term: string): void {
//     this.table?.searchTermChangedHandler(term);
//   }

//   public stopPropagation(e: Event): void {
//     e.stopPropagation();
//   }

//   public collapsedStateChangedHandler(state: boolean) {
//     if (!state) {
//       this.getData();
//     }
//     this.persistence.setEquipmentPanelCollapsibleState(this.title, state);
//   }

//   public closeMenus(): void {
//     this.listItems.forEach(x => x.closeMenu());
//   }
