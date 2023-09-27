import { Nullable } from "@allmax-angular/shared/types";

export interface Supplier {
  id: number;
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
  federalIDNumber: Nullable<string>;
  accountNumber: Nullable<string>;
  notes: Nullable<string>;
  primaryContactID: number;
}