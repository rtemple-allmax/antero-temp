import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class SupplierContactColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('name', { sortOrder: 'asc' }),
      new DataColumn('isPrimary', { caption: 'Primary' }),
      new DataColumn('address'),
      new DataColumn('city'),
      new DataColumn('stateOrProvince', { caption: 'State / Province' }),
      new DataColumn('postalCode'),
      new DataColumn('country'),
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}