import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class WorkTemplateEquipmentColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('workTemplateID', { allowSearch: false }),
      new DataColumn('workTemplate'),
      new DataColumn('equipmentID', { allowSearch: false }),
      new DataColumn('equipment.name', { caption: 'Equipment' }),
      new DataColumn('equipment.description', { caption: 'Description' }),
      new DataColumn('equipment.department.name', { caption: 'Department' }),
      new DataColumn('workOrderRate', { caption: 'Rate' }),
      new DataColumn('workOrderUnits', { caption: 'Units' }),
      new DataColumn('estimatedQuantity')
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}