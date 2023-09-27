import { Nullable } from "@allmax-angular/shared/types";
import { Instrument } from "./instrument.interface";
import { WorkOrder } from "./work-order.interface";

export interface WorkOrderInstrument {
  id: number;
  workOrderID: number;
  workOrder: Nullable<WorkOrder>;
  instrumentID: number;
  instrument: Nullable<Instrument>;
  isRequired: boolean;
  reading: Nullable<number>;
}