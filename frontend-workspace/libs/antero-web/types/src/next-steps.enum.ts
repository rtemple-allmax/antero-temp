export enum NextSteps {
  NONE,
  DATABASE_CREATE,
  DATABASE_SELECT,
  ACCOUNT_SELECT
}

export const nextStepsToLabelsMap: Map<NextSteps, string> = new Map<NextSteps, string>([
  [ NextSteps.ACCOUNT_SELECT, 'ACCOUNT SELECT'],
  [ NextSteps.DATABASE_CREATE, 'DATABASE CREATE' ],
  [ NextSteps.DATABASE_SELECT, 'DATABASE_SELECT' ],
  [ NextSteps.NONE, 'NONE' ]
]);