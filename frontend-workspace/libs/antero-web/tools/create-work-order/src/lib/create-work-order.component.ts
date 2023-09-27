// import { Equipment, MaintenanceGroup, Task, User, WorkOrderEquipment, WorkOrderLabor, WorkOrderMisc, WorkOrderPart, WorkOrderSupplier, WorkPriority, WorkStatus, WorkType } from '@allmax-angular/antero-web/entities';
// import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
// import { DataSourceConfiguratorService } from '@allmax-angular/shared/services';
// import { Nullable, ObservableBinding, TableData } from '@allmax-angular/shared/types';
// import { AccordionContainerComponent } from '@allmax-angular/shared/ui/accordion';
// import { DataTableComponent } from '@allmax-angular/shared/ui/data-table';
// import { miscIcons, navIcons } from '@allmax-angular/shared/ui/icons';
// import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
// import { unsubscribe } from '@allmax-angular/shared/utils';
import { AfterViewInit, Component, EventEmitter, Output, ViewChild, OnDestroy, ViewChildren, QueryList } from '@angular/core';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'ant-create-work-order',
  templateUrl: './create-work-order.component.html',
  styles: [],
})
export class CreateWorkOrderComponent {
  // @ViewChild(ModalWindowComponent) public window: Nullable<ModalWindowComponent>;
  // @ViewChild(AccordionContainerComponent) public accordion: Nullable<AccordionContainerComponent>;
  
  // @ViewChildren(DataTableComponent) public tablesQuery: Nullable<QueryList<DataTableComponent>>;
  
  // private subs: Subscription[] = [];
  
  // public equipmentBinding = new ObservableBinding<Equipment>();
  // public taskBinding = new ObservableBinding<Task>();
  // public dateScheduledBinding = new ObservableBinding<Date>();
  // public daysToCompleteBinding = new ObservableBinding<number>();
  // public statusBinding = new ObservableBinding<WorkStatus>();
  // public maintenanceGroupBinding = new ObservableBinding<MaintenanceGroup>();
  // public typeBinding = new ObservableBinding<WorkType>();
  // public assignedUserBinding = new ObservableBinding<User>();
  // public priorityBinding = new ObservableBinding<WorkPriority>();
  
  // public equipmentData: Nullable<TableData>;
  // public taskData: Nullable<TableData>;

  // public laborData: WorkOrderLabor[] = [];
  // public partsData: WorkOrderPart[] = [];
  // public contractorsData: WorkOrderSupplier[] = [];
  // public toolsData: WorkOrderEquipment[] = [];
  // public miscData: WorkOrderMisc[] = [];

  // public accordionIndex = -1;
  // public shouldDisable = true;
  // public icons = { ...navIcons, ...miscIcons };
  
  // constructor(
  //   private antero: AnteroService,
  //   private datasources: DataSourceConfiguratorService
  // ) { }

  // public ngAfterViewInit(): void {
  //   // this.window?.open();

  //   if (this.accordion) {
  //     this.subs.push(this.accordion.currentIndex$.subscribe(x => this.accordionIndex = x));
  //   }
  // }

  // public ngOnDestroy(): void {
  //   unsubscribe(this.subs);
  // }  

  // public closeHandler(): void {
  //   this.antero.closeModal();
  // }
}
