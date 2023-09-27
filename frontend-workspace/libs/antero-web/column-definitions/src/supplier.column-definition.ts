import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class SupplierColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('name', { caption: 'Supplier Name' }),
      new DataColumn('address'),
      new DataColumn('city'),
      new DataColumn('stateOrProvince', { caption: 'State/Province' }),
      new DataColumn('postalCode'),
      new DataColumn('country'),
      new DataColumn('phone1Number'),
      new DataColumn('phone1Description'),
      new DataColumn('phone2Number'),
      new DataColumn('phone2Description'),
      new DataColumn('phone3Number'),
      new DataColumn('phone3Description'),
      new DataColumn('phone4Number'),
      new DataColumn('phone4Description'),
      new DataColumn('federalIDNumber'),
      new DataColumn('accountNumber'),
      new DataColumn('notes'),
      new DataColumn('primaryContactID', { allowSearch: false })
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}
