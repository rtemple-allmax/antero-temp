import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class WorkTemplatePartColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('workTemplateID', { allowSearch: false }),
      new DataColumn('partQuantityID', { allowSearch: false }),
      new DataColumn('partQuantity.part.name', { caption: 'Name' }),
      new DataColumn('partQuantity.part.description', { caption: 'Description' }),
      new DataColumn('partQuantity.warehouse.name', { caption: 'Warehouse' }),
      new DataColumn('partQuantity.area.name', { caption: 'Area' }),
      new DataColumn('partQuantity.part.stockingUnit', { caption: 'Units' }),
      new DataColumn('estimatedQuantity')
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}