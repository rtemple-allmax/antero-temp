import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class PartQuantityColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('partID', { allowSearch: false }),
      new DataColumn('part.name', { caption: 'Part' }),
      new DataColumn('part.description', { caption: 'Description' }),
      new DataColumn('part.stockingUnit', { caption: 'Units' }),
      new DataColumn('warehouseID', { allowSearch: false }),
      new DataColumn('warehouse.name', { caption: 'Warehouse' }),
      new DataColumn('areaID', { allowSearch: false }),
      new DataColumn('area.name', { caption: 'Area' }),
      new DataColumn('currentQuantity', { caption: 'Qty', width: '150px' }),
      new DataColumn('minimumQuantity', { caption: 'Min Qty' }),
      new DataColumn('maximumQuantity', { caption: 'Max Qty' }),
      new DataColumn('unitCost', { format: 'currency' }),
      new DataColumn('quantityLastUsed'),
      new DataColumn('dateLastPhysicalCount', { dataType: 'date' }),
      new DataColumn('dateLastUsed', { dataType: 'date' }),
      new DataColumn('isConsumable'),
      new DataColumn('totalOnOrder', { caption: 'On Order' }),
      new DataColumn('totalOnWorkOrder', { caption: 'WO Est Alloc' }),
      new DataColumn('newQty', { allowEditing: true, width: '100px' })
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}
