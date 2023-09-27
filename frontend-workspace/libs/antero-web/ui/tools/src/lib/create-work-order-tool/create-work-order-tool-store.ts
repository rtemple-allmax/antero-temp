import { Equipment, MaintenanceGroup, Task, User, WorkPriority, WorkStatus, WorkType } from '@allmax-angular/antero-web/entities';
import { ObservableBinding } from '@allmax-angular/shared/types';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CreateWorkOrderToolStore {
  public equipmentBinding = new ObservableBinding<Equipment>();
  public taskBinding = new ObservableBinding<Task>();
  public dateScheduledBinding = new ObservableBinding<Date>();
  public dueDateBinding = new ObservableBinding<number>();
  public statusBinding = new ObservableBinding<WorkStatus>();
  public maintenanceGroupBinding = new ObservableBinding<MaintenanceGroup>();
  public typeBinding = new ObservableBinding<WorkType>();
  public assignedUserBinding = new ObservableBinding<User>();
  public priorityBinding = new ObservableBinding<WorkPriority>();

  
}