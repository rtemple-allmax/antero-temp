import { Nullable } from "@allmax-angular/shared/types";

export interface CriticalityRanking {
  id: number;
  name: Nullable<string>;
  lowerScore: number;
  upperScore: number;
}