export interface DatabaseOptions {
  name: string | null;
  nextWorkOrderNumber: number;
  nextProcedureNumber: number;
  createThroughDays: number;
  defaultWorkOrderStatusID: number;
  requireWOCompletedNotes: boolean;
}