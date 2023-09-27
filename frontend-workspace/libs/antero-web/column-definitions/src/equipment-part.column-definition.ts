import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class EquipmentPartColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('equipmentID', { allowSearch: false }),
      new DataColumn('equipment.name', { caption: 'Name' }),
      new DataColumn('equipment.description', { caption: 'Description' }),
      new DataColumn('equipment.department.name', { caption: 'Department' }),
      new DataColumn('equipment.location.name', { caption: 'Location' }),
      new DataColumn('equipment.subLocation.name', { caption: 'SubLocation' }),
      new DataColumn('partID', { allowSearch: false }),
      new DataColumn('part.name', { caption: 'Part Name', sortOrder: 'asc' }),
      new DataColumn('part.description', { caption: 'Description' }),
      new DataColumn('part.trackingType', { caption: 'Tracking Type' }),
      new DataColumn('part.productGroup.name', { caption: 'Product Group' }),
      new DataColumn('part.productType.name', { caption: 'Product Type' }),
      new DataColumn('part.stockingUnit', { caption: 'Units' }),
      new DataColumn('comment'),
      new DataColumn('totalQuantity', { caption: 'Quantity', width: '150px' }),
      // new DataColumn('', { cellTemplate: 'buttonsTemplate', visible: true, width: '30px' })
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}
