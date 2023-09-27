import { SeatTypes } from "./seat-types.enum";

export interface UserCredentials {
  username: string;
  password: string;
  type: SeatTypes;
  deviceID: string | null;
}