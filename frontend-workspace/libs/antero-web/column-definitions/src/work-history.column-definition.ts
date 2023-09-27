import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class WorkHistoryColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('equipmentID', { allowSearch: false }),
      new DataColumn('equipment.name', { caption: 'Equipment' }),
      new DataColumn('task'),
      new DataColumn('workOrderNumber', { caption: 'WO#', dataType: 'string', width: '70px' }),
      new DataColumn('workStatus'),
      new DataColumn('maintenanceGroup'),
      new DataColumn('assignedUser'),
      new DataColumn('workPriority'),
      new DataColumn('workType', { caption: 'Type' }),
      new DataColumn('needsAttentionText'),
      new DataColumn('dateScheduled', { dataType: 'date', width: '140px' }),
      new DataColumn('dateCreated', { dataType: 'date', width: '140px' }),
      new DataColumn('dateCompleted', { dataType: 'date', width: '140px' }),
      new DataColumn('dateDelinquent', { dataType: 'date', width: '140px' }),
      new DataColumn('completedBy'),
      new DataColumn('createReason'),
      new DataColumn('createReasonText'),
      new DataColumn('downtimeStart', { dataType: 'date' }),
      new DataColumn('downtimeEnd', { dataType: 'date' }),
      new DataColumn('completedNotes')
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}