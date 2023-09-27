import { Nullable } from "@allmax-angular/shared/types";
import { Instrument } from "./instrument.interface";

export interface OpcDdeLink {
  id: number;
  name: string;
  instrumentID: number;
  instrument: Nullable<Instrument>;
  isOpcLink: boolean;
  enabled: boolean;
  nodeOrService: Nullable<string>;
  serverOrTopic: Nullable<string>;
  tagOrItem: Nullable<string>;
  schedule: Uint8Array;
  lastAttemptDateTime: Nullable<Date>;
  lastAttemptSuccess: boolean;
  lastResult: number;
}