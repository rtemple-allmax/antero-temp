import { Equipment, Task } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { Nullable, TableData } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { Component, Input, OnInit, OnDestroy, ViewChild, TemplateRef, inject } from '@angular/core';
import { TaskControllerService } from '@allmax-angular/antero-web/data-access/task-controller'
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { Subscription } from 'rxjs';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { UIStoreService } from '@allmax-angular/antero-web/state-management/ui-store';
import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';
import { PopoverButtonTypes } from '@allmax-angular/shared/ui/buttons/popover-button';
import { DataStores, Modals, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { StateManagementService } from '@allmax-angular/shared/features/state-management';

@Component({
  selector: 'ant-equipment-tasks-panel',
  templateUrl: './equipment-tasks-panel.component.html',
  styleUrls: ['./equipment-tasks-panel.component.scss'],
})
export class EquipmentTasksPanelComponent implements OnInit, OnDestroy {
  @ViewChild(DataTableComponent) public table: Nullable<DataTableComponent>;
  @ViewChild('instructionsTemplate') public instructionsTemplate: Nullable<TemplateRef<any>>; 

  @Input() public height = '100%';

  private subs: Subscription[] = [];

  public icons = { ...allIcons };

  public viewType = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;

  public popoverButtonTypes: typeof PopoverButtonTypes = PopoverButtonTypes;

  public selectedEquipment: Nullable<Equipment>;
  public data: Nullable<TableData>;

  public state = inject(StateManagementService);

  public get innerHeight(): string {
    return `calc(${ this.height } - 58px)`
  }

  constructor(
    private antero: AnteroService,
    private ctrl: TaskControllerService,
    private eqStore: EquipmentSectionStore,
    private uiStore: UIStoreService
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.eqStore.selection$.subscribe(x => {
      this.selectedEquipment = x;
      this.getData();
    }));

    const sub = this.state.getStore(DataStores.UI)?.observe(UIStorePropNames.VIEW_TYPE).subscribe(x => {
      this.viewType = x;
      this.getData();
    });
    if (sub) {
      this.subs.push(sub);
    }
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public async getData(): Promise<void> {
    if (this.selectedEquipment) {
      if (this.viewType === MasterDetailViewTypes.LIST) {
        this.data = await this.ctrl.getTasksByEquipmentID_(this.selectedEquipment.id, ['name']) as TableData;
      } else {
        this.data = await this.ctrl.getTasksByEquipmentID_(this.selectedEquipment.id, [
          'name'
        ]) as TableData;
      }
      this.data.colDef.firstVisible?.updateOptions({ cellTemplate: 'cellTemplate' })
    }
  }

  public selectionHandler(record: Task): void {
    console.log()
  }

  public addHandler(): void {
    this.antero.openModal(Modals.TASK_ADD);
  }

  public editHandler(): void {
    console.log()
  }

  public deleteHandler(): void {
    console.log()
  }


  public contextMenuHandler(e: any): void {
    const record = e.row.data;
    e.items = this.updateContextMenu();
    this.selectionHandler(record);
  }

  public updateContextMenu(): any[] {
    return [
      {
        text: 'Edit',
        icon: this.icons.editIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: false,
        onItemClick: () => this.editHandler()
      },
      {
        text: 'Delete',
        icon: this.icons.deleteIcon,
        template: 'contextMenuItemTemplate',
        disabled: false,
        danger: true,
        onItemClick: () => this.deleteHandler()
      },
    ];
  }

  public searchHandler(term: string): void {
    this.table?.searchTermChangedHandler(term);
  }
}
