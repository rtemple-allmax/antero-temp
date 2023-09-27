import { Equipment, Task, WorkOrderEquipment, WorkOrderLabor, WorkOrderMisc, WorkOrderPart, WorkOrderSupplier } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { DropdownItem, Nullable, TableData } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { isNullOrEmpty, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CreateWorkOrderToolStore } from './create-work-order-tool-store';
import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { TaskControllerService } from '@allmax-angular/antero-web/data-access/task-controller';
import { TabsComponent } from '@allmax-angular/shared/ui/tabs';

@Component({
  selector: 'ant-create-work-order-tool',
  templateUrl: './create-work-order-tool.component.html',
  styleUrls: ['./create-work-order-tool.component.scss'],
})
export class CreateWorkOrderToolComponent implements OnInit, AfterViewInit, OnDestroy {    
  @ViewChild(TabsComponent) public tabs: Nullable<TabsComponent>;
  private subs: Subscription[] = [];
  
  public equipmentData: Nullable<TableData>;
  public taskData: DropdownItem[] = [];

  public laborData: WorkOrderLabor[] = [];
  public partsData: WorkOrderPart[] = [];
  public contractorsData: WorkOrderSupplier[] = [];
  public toolsData: WorkOrderEquipment[] = [];
  public miscData: WorkOrderMisc[] = [];

  public icons = { ...allIcons };

  public panelIndex = -1;
  public height = '80vh';

  public get tabsHeight(): string {
    return `calc(${ this.height} - 150px)`;
  }

  public get panelHeight(): string {
    return `calc(${ this.height } - (45px + 110px)`;
  }

  public get overlayText(): string {
    if (isNullOrEmpty(this.localStore.equipmentBinding.value)) {
      return 'Select an Equipment to Continue.'
    } else if (isNullOrEmpty(this.localStore.taskBinding.value)) {
      return 'Select a Task to Continue.'
    }
    return '';
  }

  public get tasksShouldDisable(): boolean {
    return isNullOrEmpty(this.localStore.equipmentBinding.value)
  }

  public get tabsShouldDisable(): boolean {
    return isNullOrEmpty(this.localStore.equipmentBinding.value) || isNullOrEmpty(this.localStore.taskBinding.value);
  }
  
  constructor(
    private antero: AnteroService,
    private eqCtrl: EquipmentControllerService,
    public localStore: CreateWorkOrderToolStore,
    private taskCtrl: TaskControllerService,
    private cdr: ChangeDetectorRef
  ) { }

  public ngOnInit(): void {
    this.getEquipmentData();
    this.subs.push(this.localStore.equipmentBinding.value$.subscribe(x => {
      if (x) {
        this.getTasks(x);
      } else {
        this.localStore.taskBinding.reset();
        this.taskData = [];
      }
    }));
  }

  public ngAfterViewInit(): void {
    if (this.tabs) {
      this.subs.push(this.tabs.currentIndex$.subscribe(x => this.panelIndex = x));
    }
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
    this.cdr.detach();
  }
  
  public closeHandler(): void {
    this.antero.closeModal();
  }

  public async getEquipmentData(): Promise<void> {
    this.equipmentData = await this.eqCtrl.get(['name']);
  }

  public async getTasks(record?: Equipment): Promise<void> {
    if (record) {
      const tasks = await this.taskCtrl.getTasksByEquipmentID(record.id);
      if (tasks.length > 0) {
        this.taskData = tasks.map((x: any) => ({ displayName: x.name || '', value: x, active: false })) || [];
      }
    } else {
      const eq = this.localStore.equipmentBinding.value;
      if (eq) {
        const tasks = await this.taskCtrl.getTasksByEquipmentID(eq.id);
        if (tasks.length > 0) {
          this.taskData = tasks.map((x: any) => ({ displayName: x.name || '', value: x, active: false })) || [];
        }
      }
    }
    this.cdr.detectChanges();
  }
}
