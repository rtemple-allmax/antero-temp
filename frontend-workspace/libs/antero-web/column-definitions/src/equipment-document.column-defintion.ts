import { BaseColumnDefinition, DataColumn } from "@allmax-angular/shared/types";

export class EquipmentDocumentColumnDefinition extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('equipmentID', { allowSearch: false }),
      new DataColumn('equipment.name', { caption: 'Equipment Name' }),
      new DataColumn('documentID', { allowSearch: false }),
      new DataColumn('document.name', { caption: 'Name' }),
      new DataColumn('document.extension', { caption: 'Ext.' }),
      new DataColumn('document.fileType', { caption: 'Type' }),
      new DataColumn('document.modifiedBy', { caption: 'Modified By' }),
      new DataColumn('document.dateModified', { caption: 'Date Modified', dataType: 'date' }),
      new DataColumn('document.fileName', { caption: 'Name' })
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}

export class AssignedToFilterColumnDefintion extends BaseColumnDefinition {
  constructor(visibleCols?: string[]) {
    super();

    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('name'),
      new DataColumn('originatingTypeName', { allowSearch: false, groupIndex: 1 })
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}

// [
//   { name : 'MaintenaceGroup 1', id: 0, originalID: 0, type: 0 },
//   { name : 'MaintenaceGroup 2', id: 1, originalID: 1, type: 0 },
//   { name : 'User 1', id: 2, originalID: 0, type: 1 },
//   { name : 'User 2', id: 3, originalID: 1, type: 1 },
// ]
