// import { TrackingTypes } from "@allmax-angular/antero-web/types";
import { Nullable } from "@allmax-angular/shared/types";
import { EquipmentType } from "./equipment-type.interface";
import { ProductGroup } from "./product-group.interface";
import { ProductType } from "./product-type.interface";

export interface Part {
  id: number;
  name: Nullable<string>;
  description: Nullable<string>;
  trackingType: any;
  productTypeID: Nullable<number>;
  productType: Nullable<ProductType>;
  productGroupID: Nullable<number>;
  productGroup: Nullable<ProductGroup>;
  equipmentTypeID: Nullable<number>;
  equipmentType: Nullable<EquipmentType>;
  stockingUnit: Nullable<string>;
  orderInBulk: boolean;
  bulkUnit: Nullable<string>;
  conversionFactor: Nullable<number>;
  primaryImageID: number;
  primarySupplierID: number;
  notes: Nullable<string>;
  totalQuantity: number;
}