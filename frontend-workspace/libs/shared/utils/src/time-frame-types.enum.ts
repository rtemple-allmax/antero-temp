export enum TimeFrameTypes {
  FORECAST,
  HISTORY
}

export enum HistoryTimeFrames {
  ALL,
  THIRTY_DAYS,
  THREE_MONTHS,
  SIX_MONTHS,
  ONE_YEAR,
  THREE_YEARS,
  FIVE_YEARS,
  CUSTOM
}

export const historyTimeFramesToLabelsMap: Map<HistoryTimeFrames, string> = new Map<HistoryTimeFrames, string>([
  [ HistoryTimeFrames.ALL, 'ALL'],
  [ HistoryTimeFrames.THIRTY_DAYS, 'THIRTY DAYS' ],
  [ HistoryTimeFrames.THREE_MONTHS, 'THREE MONTHS' ],
  [ HistoryTimeFrames.SIX_MONTHS, 'SIX MONTHS' ],
  [ HistoryTimeFrames.ONE_YEAR, 'ONE YEAR' ],
  [ HistoryTimeFrames.THREE_YEARS, 'THREE YEARS' ],
  [ HistoryTimeFrames.FIVE_YEARS, 'FIVE_YEARS' ],
  [ HistoryTimeFrames.CUSTOM, 'CUSTOM' ],
]);