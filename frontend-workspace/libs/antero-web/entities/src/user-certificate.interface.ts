import { Nullable } from "@allmax-angular/shared/types";
import { CertificateType } from "./certificate-type.interface";
import { User } from "./user.interface";

export interface UserCertificate {
  id: number;
  userID: number;
  user: Nullable<User>;
  certificateTypeID: number;
  certificateType: Nullable<CertificateType>;
  issuingAgency: Nullable<string>;
  certificateNumber: Nullable<string>;
  issueDate: Nullable<Date>;
  renewalDate: Nullable<Date>;
  expirationDate: Nullable<Date>;
  comment: Nullable<string>;
}