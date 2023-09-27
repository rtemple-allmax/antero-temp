import { DataFieldTypes, DataFieldUIState } from "@allmax-angular/antero-web/features/feature-persistence";
import { DataPoint } from "@allmax-angular/shared/features/state-management";

export enum CustomizableDataFieldsEquipment {
  ASSET_NUMBER = 'assetNumber',
  CATEGORY = 'category',
  CONDITION  = 'equipmentCondition',
  DATE_IN_SERVICE = 'dateInService',
  DATE_PURCHASED = 'datePurchased',
  DEPARTMENT = 'department',
  DESCRIPTION = 'description',
  GROUP = 'group',
  LIFE_EXPECTANCY = 'lifeExpectancy',
  LOCATION = 'location',
  MANUFACTURER = 'manufacturer', 
  MODEL_NUMBER = 'modelNumber',
  NOTES = 'notes',
  PRIORITY = 'equipmentPriority',
  PURCHASE_PRICE = 'purchasePrice',
  SALVAGE_VALUE = 'salvageValue',
  SERIAL_NUMBER = 'serialNumber',
  SUBLOCATION = 'subLocation',
  TYPE = 'equipmentType',
  VENDOR = 'vendor',
  WARRANTY_DAYS = 'warrantyDays',
  WARRANTY_METER = 'warrantyMeter',
  WORK_ORDER_RATE = 'workOrderRate',
  WORK_ORDER_UNITS = 'workOrderUnits'
}

export enum CollapsiblePanelsEquipment {
  MY_DATA = 'My Data',
  DETAILS = 'Details',
  PURCHASING = 'Purchasing',
  INSTRUMENTS = 'Instruments',
  PARTS = 'Parts',
  DOCUMENTS = 'Documents',
  CUSTOM = 'Custom Fields'
}

export enum PersistentUIKeysEquipment {
  CUSTOMIZABLE_FIELDS = 'eqCustomizableFields', 
  PANELS_ORDER = 'eqPanelsOrder',
  FIELDS_ORDER = 'eqFieldsOrder',
  PANELS_COLLAPSED = 'eqPanelCollapsed'
}

const initialFieldOrder: string[] = [
  CustomizableDataFieldsEquipment.DESCRIPTION,
  CustomizableDataFieldsEquipment.DEPARTMENT,
  CustomizableDataFieldsEquipment.CONDITION,
  CustomizableDataFieldsEquipment.TYPE,
  CustomizableDataFieldsEquipment.GROUP,
  CustomizableDataFieldsEquipment.PRIORITY,
  CustomizableDataFieldsEquipment.CATEGORY,
  CustomizableDataFieldsEquipment.LOCATION,
  CustomizableDataFieldsEquipment.SUBLOCATION,
  CustomizableDataFieldsEquipment.ASSET_NUMBER,
  CustomizableDataFieldsEquipment.MODEL_NUMBER,
  CustomizableDataFieldsEquipment.SERIAL_NUMBER,
  CustomizableDataFieldsEquipment.WORK_ORDER_RATE,
  CustomizableDataFieldsEquipment.WORK_ORDER_UNITS,
  CustomizableDataFieldsEquipment.NOTES,
  CustomizableDataFieldsEquipment.VENDOR,
  CustomizableDataFieldsEquipment.MANUFACTURER,
  CustomizableDataFieldsEquipment.PURCHASE_PRICE,
  CustomizableDataFieldsEquipment.DATE_PURCHASED,
  CustomizableDataFieldsEquipment.DATE_IN_SERVICE,
  CustomizableDataFieldsEquipment.SALVAGE_VALUE,
  CustomizableDataFieldsEquipment.WARRANTY_DAYS,
  CustomizableDataFieldsEquipment.WARRANTY_METER,
  CustomizableDataFieldsEquipment.LIFE_EXPECTANCY
]

const customizableFields: DataFieldUIState[] = [
  new DataFieldUIState(CustomizableDataFieldsEquipment.ASSET_NUMBER, DataFieldTypes.VALUE, 'Asset Number'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.CATEGORY, DataFieldTypes.OBJECT, 'Category', 'name'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.CONDITION, DataFieldTypes.OBJECT, 'Condition', 'name'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.DATE_IN_SERVICE, DataFieldTypes.DATE, 'Date Placed In Service'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.DATE_PURCHASED, DataFieldTypes.DATE, 'Date Purchased'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.DEPARTMENT, DataFieldTypes.OBJECT, 'Department', 'name'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.DESCRIPTION, DataFieldTypes.VALUE, 'Description'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.GROUP, DataFieldTypes.OBJECT, 'Group', 'name'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.LIFE_EXPECTANCY, DataFieldTypes.VALUE, 'Life Expectancy (In Months)'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.LOCATION, DataFieldTypes.OBJECT, 'Location', 'name'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.MANUFACTURER, DataFieldTypes.OBJECT, 'Manufacturer', 'name'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.MODEL_NUMBER, DataFieldTypes.VALUE, 'Model Number'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.NOTES, DataFieldTypes.VALUE, 'Notes'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.PRIORITY, DataFieldTypes.OBJECT, 'Priority', 'name'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.PURCHASE_PRICE, DataFieldTypes.CURRENCY, 'Purchase Price'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.SALVAGE_VALUE, DataFieldTypes.CURRENCY, 'Salvage Value'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.SERIAL_NUMBER, DataFieldTypes.VALUE, 'Serial Number'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.SUBLOCATION, DataFieldTypes.OBJECT, 'Sublocation', 'name'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.TYPE, DataFieldTypes.OBJECT, 'Type', 'name'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.VENDOR, DataFieldTypes.OBJECT, 'Vendor', 'name'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.WARRANTY_DAYS, DataFieldTypes.VALUE, 'Warranty Days'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.WARRANTY_METER, DataFieldTypes.VALUE, 'Warranty Meter'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.WORK_ORDER_RATE, DataFieldTypes.CURRENCY, 'Work Order Rate'),
  new DataFieldUIState(CustomizableDataFieldsEquipment.WORK_ORDER_UNITS, DataFieldTypes.VALUE, 'Work Order Units')
]

const panelsCollapsedStates: Array<{ name: string, state: boolean}> = [
  { name: CollapsiblePanelsEquipment.CUSTOM, state: false },
  { name: CollapsiblePanelsEquipment.DETAILS, state: false },
  { name: CollapsiblePanelsEquipment.DOCUMENTS, state: false },
  { name: CollapsiblePanelsEquipment.INSTRUMENTS, state: false },
  { name: CollapsiblePanelsEquipment.MY_DATA, state: false },
  { name: CollapsiblePanelsEquipment.PARTS, state: false },
  { name: CollapsiblePanelsEquipment.PURCHASING, state: false },
];

export const equipmentUIPersistenceSchema: DataPoint<any>[] = [
  new DataPoint<DataFieldUIState[]>(PersistentUIKeysEquipment.CUSTOMIZABLE_FIELDS, customizableFields),
  new DataPoint<string[]>(PersistentUIKeysEquipment.PANELS_ORDER, []),
  new DataPoint<string[]>(PersistentUIKeysEquipment.FIELDS_ORDER, initialFieldOrder),
  new DataPoint<Array<{ name: string, state: boolean }>>(PersistentUIKeysEquipment.PANELS_COLLAPSED, panelsCollapsedStates)
]
