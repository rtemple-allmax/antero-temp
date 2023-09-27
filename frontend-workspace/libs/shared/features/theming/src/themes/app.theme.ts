import { BaseTheme } from "./base.theme";

export interface AppTheme extends BaseTheme {
  [key: string]: string;
  '--app-color': string;
  '--base-bg-color': string;
  '--panel-bg-color': string;
  '--fg-color': string;
  '--disabled-color': string;
  '--highlight-color': string;
  '--selected-color': string;
  '--icon-color': string;
  '--border-color': string;
  '--border': string;
  '--shadow': string;
  '--overlay': string;

  // '--app-color-1': string; // Color of Top Bar
  // '--app-color-2': string; // Color of hover effects (light blue)
  // '--app-color-3': string; //Color of icons (blue)
  // '--app-color-4': string; //Wild offset color (orange)
  // '--app-fg-color': string;
}