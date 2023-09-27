import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";
import { workOrderIcons } from "@allmax-angular/shared/ui/icons";
import { isDue } from "@allmax-angular/shared/utils";

export class ProcedureColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('procedureNumber', {
        caption: 'Procedure #',
        dataType: 'string',
        width: '120px',
        sortOrder: 'asc'
      }),
      new DataColumn('dateScheduled', { dataType: 'date', width: '140px' }),
      new DataColumn('name'),
      new DataColumn('procedureSetupID', { allowSearch: false }),
      new DataColumn('maintenanceGroupID', { allowSearch: false }),
      new DataColumn('maintenanceGroup.name', { caption: 'Maintenance Group' }),
      new DataColumn('daysToComplete'),
      new DataColumn('estimatedHours'),
      new DataColumn('isCompleted', { showEditorAlways: true }),
      new DataColumn('dateCompleted', { dataType: 'date', width: '140px' }),
      new DataColumn('completedByID', { allowSearch: false }),
      new DataColumn('completedBy.name', { caption: 'Completed By' }),
      new DataColumn('actualHours'),
      new DataColumn('isDue', {
        headerCellTemplate: 'iconHeaderCellTemplate',
        cellTemplate: 'iconHeaderCellTemplate',
        icon: workOrderIcons.delinquentIcon,
        iconColor: 'var(--msg-danger)',
        width: '30px',
        showIcon: (data) => isDue(data.dateScheduled, data.daysToComplete || 0)
      }),
      new DataColumn('dueDate', { dataType: 'date' })
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}
