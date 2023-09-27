import { SectionTypes } from "./section-types.enum";

export interface Permissions {
  id: number;
  name: string | null;
  startupSection: SectionTypes;
  showDatalistList: boolean;
  isDBAdmin: boolean;
  isSetupToolsUser: boolean;
  roles: any[];
}