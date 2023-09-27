// import { SeatTypes } from "@allmax-angular/antero-web/types";
import { Nullable } from "@allmax-angular/shared/types";

export interface Seat {
  rowID: Nullable<string>;
  userName: Nullable<string>;
  seatType: any;
  deviceID: Nullable<string>;
  lastConnected: Nullable<Date>;
}