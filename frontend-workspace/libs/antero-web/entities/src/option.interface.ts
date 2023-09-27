import { Nullable } from "@allmax-angular/shared/types";

export interface Option {
  optionName: Nullable<string>;
  optionHint: Nullable<string>;
  optionValue: Uint8Array;
}