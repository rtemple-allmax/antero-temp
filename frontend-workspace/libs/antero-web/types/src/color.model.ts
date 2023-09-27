import { rgbToHex } from "@allmax-angular/shared/utils";
import { PredefinedColors } from "./predefined-colors.enum";
// import { predefindedColorsToContrastColor } from "./predefined-colors.map";

export class AmxColor {
  public predefinedColor: PredefinedColors = PredefinedColors.AMX_COLOR_DEFAULT;
  public red = 0;
  public green = 0;
  public blue = 0;
  public alpha = 1;

  constructor(id: PredefinedColors, r: number, g: number, b: number, a: number = 1) {
    this.predefinedColor = id;
    this.red = r;
    this.green = g;
    this.blue = b;
    this.alpha = a;
  }

  public get hex(): string {
    return rgbToHex(this.red, this.green, this.blue);
  }

  // public get contrastColor(): string {
  //   return predefindedColorsToContrastColor.get(this.predefinedColor) || 'black';
  // }
}

