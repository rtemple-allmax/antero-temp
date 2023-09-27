import {
  WorkHistory,
  WorkHistoryEquipment,
  WorkHistoryInstrument,
  WorkHistoryLabor,
  WorkHistoryMisc,
  WorkHistoryPart,
  WorkHistorySupplier,
  WorkOrder,
  WorkOrderEquipment,
  WorkOrderInstrument,
  WorkOrderLabor,
  WorkOrderMisc,
  WorkOrderPart,
  WorkOrderSupplier,
  WorkRequest,
  WorkRequestEquipment,
  WorkRequestInstrument,
  WorkRequestLabor,
  WorkRequestMisc,
  WorkRequestPart,
  WorkRequestSupplier,
  WorkTemplate,
  WorkTemplateEquipment,
  WorkTemplateInstrument,
  WorkTemplateLabor,
  WorkTemplateMisc,
  WorkTemplatePart,
  WorkTemplateSupplier
} from "@allmax-angular/antero-web/entities";
import { StoreBase, WorkDataTypes } from "@allmax-angular/antero-web/types";
import { DataPoint } from '@allmax-angular/shared/features/state-management';
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class WorkStoreService extends StoreBase {
  public selectedWorkDataType = new DataPoint<WorkDataTypes>(WorkDataTypes.CURRENT);

  public selectedWorkRequest = new DataPoint<WorkRequest>('selectedWorkRequest');
  public selectedWorkRequestInstrument = new DataPoint<WorkRequestInstrument>('selectedWorkRequestInstrument');
  public selectedWorkRequestLabor = new DataPoint<WorkRequestLabor>('selectedWorkRequestLabor');
  public selectedWorkRequestPart = new DataPoint<WorkRequestPart>('selectedWorkRequestPart');
  public selectedWorkRequestSupplier = new DataPoint<WorkRequestSupplier>('selectedWorkRequestSupplier');
  public selectedWorkRequestEquipment = new DataPoint<WorkRequestEquipment>('selectedWorkRequestEquipment');
  public selectedWorkRequestMisc = new DataPoint<WorkRequestMisc>('selectedWorkRequestMisc');

  public selectedWorkTemplate = new DataPoint<WorkTemplate>('selectedWorkTemplate');
  public selectedWorkTemplateInstrument = new DataPoint<WorkTemplateInstrument>('selectedWorkTemplateInstrument');
  public selectedWorkTemplateLabor = new DataPoint<WorkTemplateLabor>('selectedWorkTemplateLabor');
  public selectedWorkTemplatePart = new DataPoint<WorkTemplatePart>('selectedWorkTemplatePart');
  public selectedWorkTemplateSupplier = new DataPoint<WorkTemplateSupplier>('selectedWorkTemplateSupplier');
  public selectedWorkTemplateEquipment = new DataPoint<WorkTemplateEquipment>('selectedWorkTemplateEquipment');
  public selectedWorkTemplateMisc = new DataPoint<WorkTemplateMisc>('selectedWorkTemplateMisc');

  public selectedWorkOrders = new DataPoint<WorkOrder[]>('selectedWorkOrders', []);
  public selectedWorkOrderInstrument = new DataPoint<WorkOrderInstrument>('selectedWorkOrderInstrument');
  public selectedWorkOrderLabor = new DataPoint<WorkOrderLabor>('selectedWorkOrderLabor');
  public selectedWorkOrderPart = new DataPoint<WorkOrderPart>('selectedWorkOrderPart');
  public selectedWorkOrderSupplier = new DataPoint<WorkOrderSupplier>('selectedWorkOrderSupplier');
  public selectedWorkOrderEquipment = new DataPoint<WorkOrderEquipment>('selectedWorkOrderEquipment');
  public selectedWorkOrderMisc = new DataPoint<WorkOrderMisc>('selectedWorkOrderMisc');

  public selectedWorkHistory = new DataPoint<WorkHistory>('selectedWorkHistory');
  public selectedWorkHistoryInstrument = new DataPoint<WorkHistoryInstrument>('selectedWorkHistoryInstrument');
  public selectedWorkHistoryLabor = new DataPoint<WorkHistoryLabor>('selectedWorkHistoryLabor');
  public selectedWorkHistoryPart = new DataPoint<WorkHistoryPart>('selectedWorkHistoryPart');
  public selectedWorkHistorySupplier = new DataPoint<WorkHistorySupplier>('selectedWorkHistorySupplier');
  public selectedWorkHistoryEquipment = new DataPoint<WorkHistoryEquipment>('selectedWorkHistoryEquipment');
  public selectedWorkHistoryMisc = new DataPoint<WorkHistoryMisc>('selectedWorkHistoryMisc');
}