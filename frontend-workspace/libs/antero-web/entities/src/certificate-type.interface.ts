import { Nullable } from "@allmax-angular/shared/types";
import { UserCertificate } from "./user-certificate.interface";

export interface CertificateType {
  id: number;
  name: Nullable<string>;
  users: UserCertificate[];
}