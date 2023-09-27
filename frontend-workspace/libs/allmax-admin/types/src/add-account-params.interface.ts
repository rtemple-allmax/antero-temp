import { AllmaxAccount } from "./account.inteface";
import { UserParams } from "./user-params.interface";

export interface AddAccountParams {
  account: AllmaxAccount;
  userParams: UserParams[]
}