import { Nullable } from "@allmax-angular/shared/types";

export interface Address {
  id: number;
  name: Nullable<string>;
  fullAddress: Nullable<string>;
  isDefaultBillTo: boolean;
  isDefaultShipTo: boolean;
}