import { WorkHistory, WorkHistoryEquipment, WorkHistoryInstrument, WorkHistoryLabor, WorkHistoryMisc, WorkHistoryPart, WorkHistorySupplier, WorkOrder, WorkOrderDocument, WorkOrderEquipment, WorkOrderInstrument, WorkOrderLabor, WorkOrderMisc, WorkOrderPart, WorkOrderSupplier, WorkRequest, WorkRequestEquipment, WorkRequestInstrument, WorkRequestLabor, WorkRequestMisc, WorkRequestPart, WorkRequestSupplier, WorkTemplate, WorkTemplateEquipment, WorkTemplateInstrument, WorkTemplateLabor, WorkTemplateMisc, WorkTemplatePart, WorkTemplateSupplier } from "@allmax-angular/antero-web/entities";
import { DataPoint } from "@allmax-angular/shared/features/state-management";
import { WorkDataTypes } from "./work-data-types.enum";

export enum WorkStatePropNames {
  SELECTED_WORK_DATA_TYPE = 'selectedWorkDataType',
  SELECTED_WORK_REQUEST = 'selectedWorkRequest',
  SELECTED_WORK_REQUEST_INSTRUMENT = 'selectedWorkRequestInstrument',
  SELECTED_WORK_REQUEST_LABOR = 'selectedWorkRequestLabor',
  SELECTED_WORK_REQUEST_PART = 'selectedWorkRequestPart',
  SELECTED_WORK_REQUEST_SUPPLIER = 'selectedWorkRequestSupplier',
  SELECTED_WORK_REQUEST_EQUIPMENT = 'selectedWorkRequestEquipment',
  SELECTED_WORK_REQUEST_MISC = 'selectedWorkRequestMisc',
  SELECTED_WORK_TEMPLATE = 'selectedWorkTemplate',
  SELECTED_WORK_TEMPLATE_INSTRUMENT = 'selectedWorkTemplateInstrument',
  SELECTED_WORK_TEMPLATE_LABOR = 'selectedWorkTemplateLabor',
  SELECTED_WORK_TEMPLATE_PART = 'selectedWorkTemplatePart',
  SELECTED_WORK_TEMPLATE_SUPPLIER = 'selectedWorkTemplateSupplier',
  SELECTED_WORK_TEMPLATE_EQUIPMENT = 'selectedWorkTemplateEquipment',
  SELECTED_WORK_TEMPLATE_MISC = 'selectedWorkTemplateMisc',
  SELECTED_WORK_ORDERS = 'selectedWorkOrders',
  SELECTED_WORK_ORDER_INSTRUMENT = 'selectedWorkOrderInstrument',
  SELECTED_WORK_ORDER_LABOR = 'selectedWorkOrderLabor',
  SELECTED_WORK_ORDER_PART = 'selectedWorkOrderPart',
  SELECTED_WORK_ORDER_SUPPLIER = 'selectedWorkOrderSupplier',
  SELECTED_WORK_ORDER_EQUIPMENT = 'selectedWorkOrderEquipment',
  SELECTED_WORK_ORDER_MISC = 'selectedWorkOrderMisc',
  SELECTED_WORK_HISTORY = 'selectedWorkHistory',
  SELECTED_WORK_HISTORY_INSTRUMENT = 'selectedWorkHistoryInstrument',
  SELECTED_WORK_HISTORY_LABOR = 'selectedWorkHistoryLabor',
  SELECTED_WORK_HISTORY_PART = 'selectedWorkHistoryPart',
  SELECTED_WORK_HISTORY_SUPPLIER = 'selectedWorkHistorySupplier',
  SELECTED_WORK_HISTORY_EQUIPMENT = 'selectedWorkHistoryEquipment',
  SELECTED_WORK_HISTORY_MISC = 'selectedWorkHistoryMisc',
  SELECTED_ATTACHMENTS = 'selectedAttachments'
}

export const workStoreSchema: DataPoint[] = [
  new DataPoint<WorkDataTypes>(WorkStatePropNames.SELECTED_WORK_DATA_TYPE, WorkDataTypes.CURRENT),
  new DataPoint<WorkRequest>(WorkStatePropNames.SELECTED_WORK_REQUEST),
  new DataPoint<WorkRequestInstrument>(WorkStatePropNames.SELECTED_WORK_REQUEST_INSTRUMENT),
  new DataPoint<WorkRequestLabor>(WorkStatePropNames.SELECTED_WORK_REQUEST_LABOR),
  new DataPoint<WorkRequestPart>(WorkStatePropNames.SELECTED_WORK_REQUEST_PART),
  new DataPoint<WorkRequestSupplier>(WorkStatePropNames.SELECTED_WORK_REQUEST_SUPPLIER),
  new DataPoint<WorkRequestEquipment>(WorkStatePropNames.SELECTED_WORK_REQUEST_EQUIPMENT),
  new DataPoint<WorkRequestMisc>(WorkStatePropNames.SELECTED_WORK_REQUEST_MISC),
  new DataPoint<WorkTemplate>(WorkStatePropNames.SELECTED_WORK_TEMPLATE),
  new DataPoint<WorkTemplateInstrument>(WorkStatePropNames.SELECTED_WORK_TEMPLATE_INSTRUMENT),
  new DataPoint<WorkTemplateLabor>(WorkStatePropNames.SELECTED_WORK_TEMPLATE_LABOR),
  new DataPoint<WorkTemplatePart>(WorkStatePropNames.SELECTED_WORK_TEMPLATE_PART),
  new DataPoint<WorkTemplateSupplier>(WorkStatePropNames.SELECTED_WORK_TEMPLATE_SUPPLIER),
  new DataPoint<WorkTemplateEquipment>(WorkStatePropNames.SELECTED_WORK_TEMPLATE_EQUIPMENT),
  new DataPoint<WorkTemplateMisc>(WorkStatePropNames.SELECTED_WORK_TEMPLATE_MISC),
  new DataPoint<WorkOrder[]>(WorkStatePropNames.SELECTED_WORK_ORDERS, []),
  new DataPoint<WorkOrderInstrument>(WorkStatePropNames.SELECTED_WORK_ORDER_INSTRUMENT),
  new DataPoint<WorkOrderLabor>(WorkStatePropNames.SELECTED_WORK_ORDER_LABOR),
  new DataPoint<WorkOrderPart>(WorkStatePropNames.SELECTED_WORK_ORDER_PART),
  new DataPoint<WorkOrderSupplier>(WorkStatePropNames.SELECTED_WORK_ORDER_SUPPLIER),
  new DataPoint<WorkOrderEquipment>(WorkStatePropNames.SELECTED_WORK_ORDER_EQUIPMENT),
  new DataPoint<WorkOrderMisc>(WorkStatePropNames.SELECTED_WORK_ORDER_MISC),
  new DataPoint<WorkHistory>(WorkStatePropNames.SELECTED_WORK_HISTORY),
  new DataPoint<WorkHistoryInstrument>(WorkStatePropNames.SELECTED_WORK_HISTORY_INSTRUMENT),
  new DataPoint<WorkHistoryLabor>(WorkStatePropNames.SELECTED_WORK_HISTORY_LABOR),
  new DataPoint<WorkHistoryPart>(WorkStatePropNames.SELECTED_WORK_HISTORY_PART),
  new DataPoint<WorkHistorySupplier>(WorkStatePropNames.SELECTED_WORK_HISTORY_SUPPLIER),
  new DataPoint<WorkHistoryEquipment>(WorkStatePropNames.SELECTED_WORK_HISTORY_EQUIPMENT),
  new DataPoint<WorkHistoryMisc>(WorkStatePropNames.SELECTED_WORK_HISTORY_MISC),
  new DataPoint<WorkOrderDocument[]>(WorkStatePropNames.SELECTED_ATTACHMENTS, [])
];

