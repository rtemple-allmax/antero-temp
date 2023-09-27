import { Nullable } from "@allmax-angular/shared/types";
import { Equipment } from "./equipment.interface";
import { InstrumentTypes } from "./instrument-types.enum";

export interface Instrument {
  id: number;
  equipmentID: number;
  equipment: Nullable<Equipment>;
  name: Nullable<string>;
  instrumentType: InstrumentTypes;
  units: Nullable<string>;
  rollOver: Nullable<number>;
  lastReading: Nullable<number>;
  lastReadingDate: Nullable<Date>;
}