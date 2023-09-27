import { Nullable } from "@allmax-angular/shared/types";
import { Supplier } from "./supplier.interface";

export interface SupplierContact {
  id: number;
  supplierID: number;
  supplier: Nullable<Supplier>;
  name: Nullable<string>;
  address: Nullable<string>;
  city: Nullable<string>;
  stateOrProvince: Nullable<string>;
  postalCode: Nullable<string>;
  country: Nullable<string>;
  phone1Number: Nullable<string>;
  phone1Description: Nullable<string>;
  phone2Number: Nullable<string>;
  phone2Description: Nullable<string>;
  phone3Number: Nullable<string>;
  phone3Description: Nullable<string>;
  phone4Number: Nullable<string>;
  phone4Description: Nullable<string>;
  comment: Nullable<string>;
  isPrimary: boolean;
}