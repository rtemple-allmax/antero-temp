import { TrackingTypes } from "./tracking-types.interface";

export const trackingTypesToLabelsMap: Map<TrackingTypes, string> = new Map<TrackingTypes, string>([
  [ TrackingTypes.TRACKED, 'Tracked' ],
  [ TrackingTypes.UNTRACKED, 'Untracked' ],
  [ TrackingTypes.TOOL, 'Tool' ]
]);