// import { UserDataCategories } from "@allmax-angular/antero-web/types";
import { Nullable } from "@allmax-angular/shared/types";

export interface UserData {
  id: number;
  userName: Nullable<string>;
  category: any;
  itemName: Nullable<string>;
  data: Uint8Array;
}