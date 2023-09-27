import { trackingTypesToLabelsMap } from "@allmax-angular/antero-web/types";
import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class PartColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('name', { sortOrder: 'asc' }),
      new DataColumn('description'),
      new DataColumn('trackingType', {
        caption: 'Tracking Type',
        calculateDisplayValue: e => trackingTypesToLabelsMap.get(e.trackingType),
      }),
      new DataColumn('productTypeID', { allowSearch: false }),
      new DataColumn('productType.name', { caption: 'Product Type' }),
      new DataColumn('productGroupID', { allowSearch: false }),
      new DataColumn('productGroup.name', { caption: 'Product Group' }),
      new DataColumn('equipmentTypeID', { allowSearch: false }),
      new DataColumn('equipmentType.name', { caption: 'Equipment Type' }),
      new DataColumn('stockingUnit', { caption: 'Stock Unit' }),
      new DataColumn('orderInBulk', { showEditorAlways: true }),
      new DataColumn('bulkUnit'),
      new DataColumn('conversionFactor'),
      new DataColumn('primaryImageID', { allowSearch: false }),
      new DataColumn('primarySupplierID', { allowSearch: false })
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}
