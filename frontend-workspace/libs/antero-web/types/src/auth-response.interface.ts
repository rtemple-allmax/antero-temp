import { DatabaseOptions } from "./database-options.interface";
import { Permissions } from "./permissions.interface";
import { UserPreferences } from "./user-preferences.interface";

export interface AuthResponse {
  accountNumbers: string[] | null;
  username: string | null;
  version: string | null;
  currentUser: any | null;
  deviceID: string | null;
  databaseName: string | null;
  permissions: Permissions | null;
  token: string | null;
  hasDataPort: boolean;
  hasDesktop: boolean;
  hasWeb: boolean;
  mapTilerKey: string | null;
  preferences: UserPreferences | null;
  dbOptions: DatabaseOptions | null;
}