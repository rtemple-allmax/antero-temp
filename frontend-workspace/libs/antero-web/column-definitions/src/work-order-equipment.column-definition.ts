import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class WorkOrderEquipmentColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('workOrderID', { allowSearch: false }),
      new DataColumn('workOrder'),
      new DataColumn('equipmentID', { allowSearch: false }),
      new DataColumn('equipment.name', { caption: 'Equipment' }),
      new DataColumn('equipment.description', { caption: 'Description' }),
      new DataColumn('estimatedQuantity', { caption: 'Est. Quantity' }),
      new DataColumn('actualQuantity'),
      new DataColumn('workOrderRate', { caption: 'Rate' }),
      new DataColumn('workOrderUnit', { caption: 'Units' })
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}