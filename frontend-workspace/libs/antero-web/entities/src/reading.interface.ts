import { Nullable } from "@allmax-angular/shared/types";
import { Instrument } from "./instrument.interface";

export interface Reading {
  id: number;
  instrumentID: number;
  instrument: Nullable<Instrument>;
  dateOfReading: Nullable<Date>;
  value: Nullable<number>;
  userName: Nullable<string>;
  fullName: Nullable<string>;
  whereRecorded: Nullable<string>;
}