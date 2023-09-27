import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class WorkHistoryLaborColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('workHistoryID', { allowSearch: false }),
      new DataColumn('laborClass'),
      new DataColumn('rate'),
      new DataColumn('laborAccount'),
      new DataColumn('laborType'),
      new DataColumn('multiplier'),
      new DataColumn('user'),
      new DataColumn('estimatedHours', { caption: 'Est. Hours', dataType: 'number' }),
      new DataColumn('actualHours', { dataType: 'number' })
    ];

    if(visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}