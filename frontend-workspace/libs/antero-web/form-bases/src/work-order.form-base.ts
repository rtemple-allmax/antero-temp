import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import { MaintenanceGroup, User, WorkOrder, WorkPriority, WorkStatus, WorkType } from '@allmax-angular/antero-web/entities';
import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { Component, inject } from '@angular/core';
import { WidgetBaseComponent } from '@allmax-angular/antero-web/bases';

@Component({ template: '' })
export class WorkOrderFormBaseComponent extends WidgetBaseComponent {
  protected source: Nullable<WorkOrder>;

  protected ctrl = inject(CurrentWorkController);

  public icons = { ...allIcons };
  
  public instructionsBinding = new ObservableBinding<string>();
  public maintenanceGroupBinding = new ObservableBinding<MaintenanceGroup>();
  public assignedUserBinding = new ObservableBinding<User>();
  public priorityBinding = new ObservableBinding<WorkPriority>();
  public typeBinding = new ObservableBinding<WorkType>();
  public dateScheduledBinding = new ObservableBinding<Date>();
  public dateCompletedBinding = new ObservableBinding<Date>();
  public completedByBinding = new ObservableBinding<User>();
  public statusBinding = new ObservableBinding<WorkStatus>();
  public needsAttentionBinding = new ObservableBinding<boolean>(false);
  public needsAttentionTextBinding = new ObservableBinding<string>();
  public downtimeStartBinding = new ObservableBinding<Date>();
  public downtimeEndBinding = new ObservableBinding<Date>();
  public completedNotesBinding = new ObservableBinding<string>();
  public dueDateBinding = new ObservableBinding<Date>();
}