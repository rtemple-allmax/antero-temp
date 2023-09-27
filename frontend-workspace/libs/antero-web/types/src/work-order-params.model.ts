import { EquipmentDocument, WorkHistory, WorkOrder, WorkOrderDocument, WorkOrderEquipment, WorkOrderInstrument, WorkOrderLabor, WorkOrderMisc, WorkOrderPart, WorkOrderSupplier } from "@allmax-angular/antero-web/entities";
import { Nullable } from "@allmax-angular/shared/types";
import { ApiResponse } from "./api-response.interface";

export interface WorkOrderParams {
  equipmentDocuments: ApiResponse<EquipmentDocument>;
  equipmentRecentHistory: ApiResponse<WorkHistory>;
  workOrder: ApiResponse<WorkOrder>;
  workOrderDocuments: ApiResponse<WorkOrderDocument>;
  workOrderEquipment: ApiResponse<WorkOrderEquipment>;
  workOrderInstructions: ApiResponse<string>;
  workOrderInstruments: ApiResponse<WorkOrderInstrument>;
  workOrderLabor: ApiResponse<WorkOrderLabor>;
  workOrderMisc: ApiResponse<WorkOrderMisc>;
  workOrderParts: ApiResponse<WorkOrderPart>;
  workOrderSuppliers: ApiResponse<WorkOrderSupplier>;
}

export class WorkOrderData {
  public eqDocuments: EquipmentDocument[] = [];
  public history: WorkHistory[] = [];
  public wo: Nullable<WorkOrder>;
  public woDocuments: WorkOrderDocument[] = [];
  public equipment: WorkOrderEquipment[] = [];
  public instructions = '';
  public instruments: WorkOrderInstrument[] = [];
  public labor: WorkOrderLabor[] = [];
  public misc: WorkOrderMisc[] = [];
  public parts: WorkOrderPart[] = [];
  public suppliers: WorkOrderSupplier[] = [];

  constructor(params: WorkOrderParams) {
    this.eqDocuments = params.equipmentDocuments.data;
    this.history = params.equipmentRecentHistory.data;
    if (params.workOrder.data.length === 1) {
      this.wo = params.workOrder.data[0];
    } else {
      console.error('multiple wos in params');
    }
    this.woDocuments = params.workOrderDocuments.data;
    this.equipment = params.workOrderEquipment.data;
    if (params.workOrderInstructions.data.length === 1) {
      this.instructions = params.workOrderInstructions.data[0];
    } else {
      console.error('multiple instructions in params');
    }
    this.instruments = params.workOrderInstruments.data;
    this.labor = params.workOrderLabor.data;
    this.misc = params.workOrderMisc.data;
    this.parts = params.workOrderParts.data;
    this.suppliers = params.workOrderSuppliers.data;
  }
}