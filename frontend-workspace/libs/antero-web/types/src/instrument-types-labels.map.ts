import { InstrumentTypes } from "@allmax-angular/antero-web/entities";

export const instrumentTypesToLabelsMap: Map<InstrumentTypes, string> = new Map<InstrumentTypes, string>([
  [ InstrumentTypes.GUAGE, 'Gauge' ],
  [ InstrumentTypes.METER, 'Meter' ]
]);