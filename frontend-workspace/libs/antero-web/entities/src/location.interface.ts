import { SubLocation } from "./sub-location.interface";

export interface Location {
  [key: string]: any;
  id: number;
  name: string;
  subLocations: SubLocation[];
}