import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class WorkOrderLaborColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('workOrderID', { allowSearch: false }),
      new DataColumn('workOrder'),
      new DataColumn('laborClassID', { allowSearch: false }),
      new DataColumn('laborClass.name', { caption: 'Labor Class' }),
      new DataColumn('laborAccountID', { allowSearch: false }),
      new DataColumn('laborAccount.name', { caption: 'Labor Account' }),
      new DataColumn('userID', { allowSearch: false }),
      new DataColumn('user.name', { caption: 'User' }),
      new DataColumn('laborTypeID', { allowSearch: false }),
      new DataColumn('laborType.name', { caption: 'Labor Type' }),
      new DataColumn('estimatedHours', { caption: 'Est. Hours', dataType: 'number' }),
      new DataColumn('actualHours', { dataType: 'number' })
    ];

    if(visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}