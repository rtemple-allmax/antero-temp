import { CustomFieldNames } from '@allmax-angular/antero-web/entities';
import { BaseColumnDefinition, DataColumn, Nullable } from '@allmax-angular/shared/types';

export class EquipmentColumnDefinition extends BaseColumnDefinition {
  private customFieldNames: Nullable<CustomFieldNames>;

  constructor(visibleCols?: string[]) {
    super();
    
    this.columns = [
      new DataColumn('id', { allowSearch: false }),
      new DataColumn('name', {
        sortOrder: 'asc',
        allowFiltering: true,
        allowReordering: true,
      }),
      new DataColumn('description'),
      new DataColumn('departmentID', { allowSearch: false }),
      new DataColumn('department.name', { caption: 'Department' }),
      new DataColumn('retired'),
      new DataColumn('inServiceStatus', { showEditorAlways: true  }),
      new DataColumn('equipmentConditionID', { allowSearch: false }),
      new DataColumn('equipmentCondition.name', { caption: 'Condition' }),
      new DataColumn('locationID', { allowSearch: false }),
      new DataColumn('location.name', { caption: 'Location' }),
      new DataColumn('latitude', { dataType: 'number' }),
      new DataColumn('longitude'),
      new DataColumn('mapImageID', { allowSearch: false }),
      new DataColumn('mapZoomLevel'),
      new DataColumn('vendorID', { allowSearch: false }),
      new DataColumn('vendor.name', { caption: 'Vendor' }),
      new DataColumn('manufacturerID', { allowSearch: false }),
      new DataColumn('manufacturer.name', { caption: 'Manufacturer' }),
      new DataColumn('equipmentTypeID', { allowSearch: false }),
      new DataColumn('equipmentType.name', { caption: 'Type' }),
      new DataColumn('equipmentPriorityID', { allowSearch: false }),
      new DataColumn('equipmentPriority.name', { caption: 'Priority' }),
      new DataColumn('groupID', { allowSearch: false }),
      new DataColumn('group.name', { caption: 'Group' }),
      new DataColumn('categoryID', { allowSearch: false }),
      new DataColumn('category.name', { caption: 'Category' }),
      new DataColumn('modelNumber'),
      new DataColumn('serialNumber'),
      new DataColumn('assetNumber'),
      new DataColumn('datePurchased', { dataType: 'date' }),
      new DataColumn('purchasePrice', { format: 'currency' }),
      new DataColumn('salvageValue', { dataType: 'string', format: 'currency' }),
      new DataColumn('dateInService'),
      new DataColumn('warrantyDays'),
      new DataColumn('warrantyMeter'),
      new DataColumn('lifeExpectancy'),
      new DataColumn('workOrderRate', { format: 'currency' }),
      new DataColumn('workOrderUnits'),
      new DataColumn('primaryImageID'),
      new DataColumn('probabilityOfFailure'),
      new DataColumn('consequenceOfFailure'),
      new DataColumn('criticalityRankingID'),
      new DataColumn('criticalityScore', { dataType: 'number' }),
      new DataColumn('criticalityRanking.name'),
    ];

    if (visibleCols) {
      this.setVisibility(visibleCols);
    }
  }
}