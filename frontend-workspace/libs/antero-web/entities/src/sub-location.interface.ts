import { Nullable } from "@allmax-angular/shared/types";
import { Location } from "./location.interface";

export interface SubLocation {
  id: number;
  locationID: number;
  location: Nullable<Location>;
  name: Nullable<string>;
}