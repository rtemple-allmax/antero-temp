import { MaintenanceGroup, User, WorkOrder, WorkPriority, WorkStatus, WorkType } from "@allmax-angular/antero-web/entities";
import { Nullable } from "@allmax-angular/shared/types";
import { Component, EventEmitter, Output, inject } from "@angular/core";
import { WorkOrderFormBaseComponent } from "./work-order.form-base";
import { UserController } from '@allmax-angular/antero-web/data-access/user-controller';

@Component({ template: '' })
export class WorkOrderAdminFormBaseComponent extends WorkOrderFormBaseComponent {
  @Output() public editSuccess = new EventEmitter<WorkOrder>();

  private userCtrl = inject(UserController)

  public statuses: WorkStatus[] = [];
  public types: WorkType[] = [];
  public priorities: WorkPriority[] = [];
  public groups: MaintenanceGroup[] = [];
  public users: User[] = [];

  public populate(record: Nullable<WorkOrder>): void {
    if (record) {
      this.source = record;
      const { workStatus, workType, workPriority, dueDate, maintenanceGroup, assignedUser } = this.source;
      this.statusBinding.set(workStatus);
      this.typeBinding.set(workType);
      this.priorityBinding.set(workPriority);
      this.dueDateBinding.set(dueDate);
      this.maintenanceGroupBinding.set(maintenanceGroup);
      this.assignedUserBinding.set(assignedUser);
    }
  }

  public async submitEdit(): Promise<void> {
    if (this.source) {
      const record: WorkOrder = {
        ...this.source,
        workStatusID: this.statusBinding.value?.id || null,
        workTypeID: this.typeBinding.value?.id || null,
        workPriorityID: this.priorityBinding.value?.id || null,
        dueDate: this.dueDateBinding.value || null,
        maintenanceGroupID: this.maintenanceGroupBinding.value?.id || null,
        assignedUserID: this.assignedUserBinding.value?.id || null
      }
      const result = await this.ctrl.updateWorkOrder(record);
      if (result) {
        this.editSuccess.emit(record);
      }
    }
  }

  public async getStatuses(): Promise<void> {
    this.statuses = await this.ctrl.getAllStatuses(); 
  }

  public async getTypes(): Promise<void> {
    this.types = await this.ctrl.getAllWorkTypes(); 
  }

  public async getPriorities(): Promise<void> {
    this.priorities = await this.ctrl.getAllWorkPriorities(); 
  }

  public async getGroups(): Promise<void> {
    this.groups = await this.ctrl.getAllMaintenaceGroups(); 
  }

  // public async getUsers(): Promise<void> {
  //   this.users = await this.userCtrl.get(); 
  // }
}