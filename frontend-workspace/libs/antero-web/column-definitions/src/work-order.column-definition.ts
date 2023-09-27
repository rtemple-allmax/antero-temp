import { WorkOrder } from "@allmax-angular/antero-web/entities";
import { getContrastColor } from "@allmax-angular/antero-web/types";
import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";
import { allIcons } from "@allmax-angular/shared/ui/icons";
import { isDue } from "@allmax-angular/shared/utils";

export class WorkOrderColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('equipmentID', { allowSearch: false }),
      new DataColumn('equipment.name', { caption: 'Equipment' }),
      new DataColumn('taskID', { allowSearch: false }),
      new DataColumn('task.name', { caption: 'Task' }),
      new DataColumn('instructions', { allowSearch: false }),
      new DataColumn('workOrderNumber', {
        caption: 'WO#',
        sortOrder: 'asc',
        dataType: 'string',
        width: '70px',
        fixedPosition: 'left',
        fixed: true,
      }),
      new DataColumn('maintenanceGroupID', { allowSearch: false }),
      new DataColumn('maintenanceGroup.name', { caption: 'Maintenance Group' }),
      new DataColumn('assignedUserID', { allowSearch: false }),
      new DataColumn('assignedUser.displayName', { caption: 'Assigned User' }),
      new DataColumn('workTemplateID', { allowSearch: false }),
      new DataColumn('workPriorityID', { allowSearch: false }),
      new DataColumn('workPriority.name', { caption: 'Work Priority' }),
      new DataColumn('workTypeID', { allowSearch: false }),
      new DataColumn('workType.name', { caption: 'Work Type' }),
      new DataColumn('dateScheduled', { dataType: 'date', width: '140px' }),
      new DataColumn('dateCreated', { dataType: 'date', width: '140px' }),
      new DataColumn('dateCompleted', { dataType: 'date', width: '140px' }),
      new DataColumn('daysToComplete'),
      new DataColumn('completedByID', { allowSearch: false }),
      new DataColumn('completedBy.displayName', { caption: 'Completed By' }),
      new DataColumn('createReason'),
      new DataColumn('workOrderState'),
      new DataColumn('workStatusID', { allowSearch: false }),
      new DataColumn('workStatus.name', {
        cellTemplate: 'bgColorCellTemplate',
        caption: 'Work Status',
        bgColor: (data) => this.getWorkStatusBGColor(data),
        fgColor: (data) => this.getWorkStatusTextColor(data),
      }),
      new DataColumn('needsAttention', {
        headerCellTemplate: 'iconHeaderCellTemplate',
        cellTemplate: 'alternatePopoverButtonTemplate',
        icon: allIcons.thickNeedsAttentionIcon,
        iconColor: 'var(--msg-warning)',
        width: '60px',
        showIcon: (data) => this.showAttentionIcon(data)
      }),
      new DataColumn('needsAttentionText'),
      new DataColumn('downtimeStart', { dataType: 'date' }),
      new DataColumn('downtimeEnd', { dataType: 'date' }),
      new DataColumn('completedNotes'),
      new DataColumn('dueDate', { dataType: 'date' }),
      new DataColumn('isDue', {
        headerCellTemplate: 'iconHeaderCellTemplate',
        cellTemplate: 'popoverButtonTemplate',
        icon: allIcons.thickDelinquentIcon,
        iconColor: 'var(--msg-danger)',
        width: '60px',
        calculateCellValue: (data) => isDue(data.dateScheduled, data.daysToComplete || 0),
        showIcon: (data) => isDue(data.dateScheduled, data.daysToComplete || 0)
      }),
      new DataColumn('dateLastCompleted', { dataType: 'date' }),
      new DataColumn('estimatedHours')
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }

  private getWorkStatusBGColor(data: WorkOrder): string {
    return data?.workStatus?.color || 'transparent';
  }

  private getWorkStatusTextColor(data: WorkOrder): string {
    return data?.workStatus?.color ? getContrastColor(data.workStatus.color) : 'var(--fg-color)';
  }
  
  private showAttentionIcon(data: any): boolean {
    return !!data.needsAttention;
  }
}

