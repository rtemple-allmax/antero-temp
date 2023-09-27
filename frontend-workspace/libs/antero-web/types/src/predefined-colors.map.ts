import { AmxColor } from "./color.model";
import { PredefinedColors } from "./predefined-colors.enum";

export const predefinedColorsToColorMap: Map<PredefinedColors, AmxColor> = new Map<PredefinedColors, AmxColor>([
  [ PredefinedColors.AMX_COLOR_01, new AmxColor(PredefinedColors.AMX_COLOR_01, 139, 0, 0) ],
  [ PredefinedColors.AMX_COLOR_02, new AmxColor(PredefinedColors.AMX_COLOR_02, 255, 0, 0) ],
  [ PredefinedColors.AMX_COLOR_03, new AmxColor(PredefinedColors.AMX_COLOR_03, 255, 165, 0) ],
  [ PredefinedColors.AMX_COLOR_04, new AmxColor(PredefinedColors.AMX_COLOR_04, 255, 255, 0) ],
  [ PredefinedColors.AMX_COLOR_05, new AmxColor(PredefinedColors.AMX_COLOR_05, 144, 238, 144) ],
  [ PredefinedColors.AMX_COLOR_06, new AmxColor(PredefinedColors.AMX_COLOR_06, 0, 128, 0) ],
  [ PredefinedColors.AMX_COLOR_07, new AmxColor(PredefinedColors.AMX_COLOR_07, 173, 216, 230) ],
  [ PredefinedColors.AMX_COLOR_08, new AmxColor(PredefinedColors.AMX_COLOR_08, 0, 0, 255) ],
  [ PredefinedColors.AMX_COLOR_09, new AmxColor(PredefinedColors.AMX_COLOR_09, 0, 0, 139) ],
  [ PredefinedColors.AMX_COLOR_10, new AmxColor(PredefinedColors.AMX_COLOR_10, 128, 0, 128) ],
  [ PredefinedColors.AMX_COLOR_11, new AmxColor(PredefinedColors.AMX_COLOR_11, 222, 245, 250) ],
  [ PredefinedColors.AMX_COLOR_12, new AmxColor(PredefinedColors.AMX_COLOR_12, 70, 70, 70) ],
  [ PredefinedColors.AMX_COLOR_13, new AmxColor(PredefinedColors.AMX_COLOR_13, 45, 162, 191) ],
  [ PredefinedColors.AMX_COLOR_14, new AmxColor(PredefinedColors.AMX_COLOR_14, 218, 31, 40) ],
  [ PredefinedColors.AMX_COLOR_15, new AmxColor(PredefinedColors.AMX_COLOR_15, 235, 100, 27) ],
  [ PredefinedColors.AMX_COLOR_16, new AmxColor(PredefinedColors.AMX_COLOR_16, 57, 99, 157) ],
  [ PredefinedColors.AMX_COLOR_17, new AmxColor(PredefinedColors.AMX_COLOR_17, 71, 75, 120) ],
  [ PredefinedColors.AMX_COLOR_18, new AmxColor(PredefinedColors.AMX_COLOR_18, 125, 60, 74) ],
  [ PredefinedColors.AMX_COLOR_19, new AmxColor(PredefinedColors.AMX_COLOR_19, 176, 204, 176) ],
  [ PredefinedColors.AMX_COLOR_20, new AmxColor(PredefinedColors.AMX_COLOR_20, 192, 190, 175) ],
  [ PredefinedColors.AMX_COLOR_21, new AmxColor(PredefinedColors.AMX_COLOR_21, 232, 183, 183) ],
  [ PredefinedColors.AMX_COLOR_22, new AmxColor(PredefinedColors.AMX_COLOR_22, 206, 197, 151) ],
  [ PredefinedColors.AMX_COLOR_23, new AmxColor(PredefinedColors.AMX_COLOR_23, 234, 235, 222) ],
  [ PredefinedColors.AMX_COLOR_24, new AmxColor(PredefinedColors.AMX_COLOR_24, 254, 250, 201) ],
  [ PredefinedColors.AMX_COLOR_25, new AmxColor(PredefinedColors.AMX_COLOR_25, 231, 188, 41) ],
  [ PredefinedColors.AMX_COLOR_26, new AmxColor(PredefinedColors.AMX_COLOR_26, 209, 144, 73) ],
  [ PredefinedColors.AMX_COLOR_27, new AmxColor(PredefinedColors.AMX_COLOR_27, 255, 56, 140) ],
  [ PredefinedColors.AMX_COLOR_28, new AmxColor(PredefinedColors.AMX_COLOR_28, 0, 91, 211) ],
  [ PredefinedColors.AMX_COLOR_29, new AmxColor(PredefinedColors.AMX_COLOR_29, 132, 170, 51) ],
  [ PredefinedColors.AMX_COLOR_30, new AmxColor(PredefinedColors.AMX_COLOR_30, 254, 184, 10) ],
  [ PredefinedColors.AMX_COLOR_31, new AmxColor(PredefinedColors.AMX_COLOR_31, 163, 121, 187) ],
  [ PredefinedColors.AMX_COLOR_DEFAULT, new AmxColor(PredefinedColors.AMX_COLOR_DEFAULT, 255, 255, 255) ],
]);

export const getContrastColor = (hex: string): string => {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0,2),16);
  const g = parseInt(hex.substring(2,4),16);
  const b = parseInt(hex.substring(4,6),16);
  const lumens = ((r*299)+(g*587)+(b*114))/1000;
  return (lumens >= 125) ? 'rgb(51, 51, 51)' : 'white';
}