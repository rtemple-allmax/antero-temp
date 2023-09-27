import { Nullable } from "@allmax-angular/shared/types";
import { Supplier } from "./supplier.interface";
import { WorkTemplate } from "./work-template.interface";

export interface WorkTemplateSupplier {
  id: number;
  workTemplateID: number;
  workTemplate: Nullable<WorkTemplate>;
  supplierID: number;
  supplier: Nullable<Supplier>;
  partCost: number;
  laborCost: number;
  miscCost: number;
  taxCost: number;
  totalCost: number;
}