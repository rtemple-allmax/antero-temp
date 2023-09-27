import { workScheduleTypesToLabelsMap } from "@allmax-angular/antero-web/types";
import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";
export class WorkTemplateColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();
    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('equipmentID', { allowSearch: false }),
      new DataColumn('equipment.name', { caption: 'Equipment' }),
      new DataColumn('equipment.description', { caption: 'Description' }),
      // new DataColumn('equipment.department.name', { caption: 'Department' }),
      new DataColumn('taskID', { allowSearch: false }),
      new DataColumn('task.name', { caption: 'Task' }),
      new DataColumn('isEnabled', { showEditorAlways: true }),
      new DataColumn('workTypeID', { allowSearch: false }),
      new DataColumn('workType.name', { caption: 'Work Type' }),
      new DataColumn('workPriorityID', { allowSearch: false }),
      new DataColumn('workPriority.name', { caption: 'Work Priority' }),
      new DataColumn('daysToComplete'),
      new DataColumn('maintenanceGroupID', { allowSearch: false }),
      new DataColumn('maintenanceGroup.name', { caption: 'Maintenance Group' }),
      new DataColumn('dateLastScheduled', { caption: 'Last Scheduled', dataType: 'date' }),
      new DataColumn('dateLastCompleted', { caption: 'Last Completed', dataType: 'date' }),
      new DataColumn('workScheduleType', {
        caption: 'Schedule Type',
        dataType: 'string',
        calculateDisplayValue: e => workScheduleTypesToLabelsMap.get(e.workScheduleType),
      }),
      new DataColumn('inServiceEnabled', { showEditorAlways: true }),
      new DataColumn('inServiceDays'),
      // new DataColumn('byDayOfWeek', { showEditorAlways: true }),
      // new DataColumn('daysOfWeek'),
      // new DataColumn('months'),
      // new DataColumn('weeks'),
      // new DataColumn('dates'),
      // new DataColumn('datesLast', { showEditorAlways: true }),
      new DataColumn('outOfServiceDays'),
      new DataColumn('nextForecastDate')
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}
