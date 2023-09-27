import { SecurityLevels } from "@allmax-angular/shared/types";

export const securityLevelsToLabelsMap: Map<SecurityLevels, string> = new Map<SecurityLevels, string>([
  [ SecurityLevels.AddEdit, 'Add & Edit' ],
  [ SecurityLevels.Full, 'Delete (Full)' ],
  [ SecurityLevels.NoAccess, 'No Access' ],
  [ SecurityLevels.ViewOnly, 'View Only' ]
]);

export const securityLevelsToBooleanMap: Map<SecurityLevels, boolean> = new Map<SecurityLevels, boolean>([
  [ SecurityLevels.AddEdit, false ],
  [ SecurityLevels.Full, true ],
  [ SecurityLevels.NoAccess, false ],
  [ SecurityLevels.ViewOnly, false ]
]);