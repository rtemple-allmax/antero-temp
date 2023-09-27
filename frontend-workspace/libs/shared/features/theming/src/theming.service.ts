import { Injectable } from "@angular/core";

import { Nullable } from "@allmax-angular/shared/types";

import { AppTheme } from "./themes/app.theme";
import { Themes } from "./themes/themes.enum";

import { themeAntero } from './themes/antero.theme';
import { themeAnteroDark } from './themes/antero-dark.theme';
// import { themeSynexus } from './themes/synexus.theme';
// import { themeSynexusDark } from './themes/synexus-dark.theme';
// import { themeWastewater } from './themes/wastewater.theme';
// import { themeWastewaterDark } from './themes/wastewater-dark.theme';
// import { themeWater } from './themes/water.theme';
// import { themeWaterDark } from './themes/water-dark.theme';

@Injectable({ providedIn: 'root' })
export class ThemingService {
  private active: Nullable<AppTheme>;

  public dxLightTheme = 'dx.generic.light';
  public dxDarkTheme = 'dx.generic.darkmoon'

  public initialize(theme: Themes): void {
    this.activateTheme(theme);
  }

  public activateTheme(theme: Themes): void {
    switch(theme) {
      case Themes.ANTERO:
       this.active = themeAntero;
       break;
      case Themes.ANTERO_DARK:
        this.active = themeAnteroDark;
        break;
      case Themes.SYNEXUS:
        // this.active = themeSynexus;
        break;
      case Themes.SYNEXUS_DARK:
        // this.active = themeSynexusDark;
        break;
      case Themes.WASTEWATER:
        // this.active = themeWastewater;
        break;
      case Themes.WASTEWATER_DARK:
        // this.active = themeWastewaterDark;
        break;
      case Themes.WATER:
        // this.active = themeWater;
        break;
      case Themes.WATER_DARK:
        // this.active = themeWaterDark;
        break;
    }

    if (this.active) {
      Object.keys(this.active).forEach(key => document.documentElement.style.setProperty(key, { ...this.active }[ key ]))
    }
  }
}