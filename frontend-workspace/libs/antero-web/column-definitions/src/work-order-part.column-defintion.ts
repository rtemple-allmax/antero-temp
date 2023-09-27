import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class WorkOrderPartColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('workOrderID', { allowSearch: false }),
      new DataColumn('workOrder'),
      new DataColumn('partQuantityID', { allowSearch: false }),
      new DataColumn('partQuantity.part.name', { caption: 'Name' }),
      new DataColumn('partQuantity.part.description', { caption: 'Description' }),
      new DataColumn('partQuantity.warehouse.name', { caption: 'Warehouse' }),
      new DataColumn('partQuantity.area.name', { caption: 'Area' }),
      new DataColumn('unit', { caption: 'Units' }),
      new DataColumn('estimatedQuantity', { caption: 'Est. Quantity', allowEditing: true, width: '100px' }),
      new DataColumn('actualQuantity', { allowEditing: true, width: '50px' }),
      new DataColumn('cost'),
      new DataColumn('stockLocation', { calculateCellValue: (data) => {
        return `
        ${ data?.partQuantity?.warehouse?.name ? data.partQuantity.warehouse.name : '' }
        ${ data?.partQuantity?.warehouse?.name && !!data?.area?.name ? ' - ' : ''}
        ${ data?.partQuantity?.area?.name ? data.partQuantity.area.name : '' }
        `;
      }})
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}