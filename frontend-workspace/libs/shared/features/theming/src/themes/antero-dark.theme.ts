import { AppTheme } from './app.theme';
import { themeBase } from './base.theme';

export const themeAnteroDark: AppTheme = {
  ...themeBase,
  '--app-color': 'rgb(70, 86, 114)',
  '--base-bg-color': 'rgb(51, 51, 51)',
  '--panel-bg-color': 'rgb(42, 43, 45)',
  '--fg-color': 'white',
  '--highlight-color': 'rgb(61, 235, 211)',
  '--selected-color': 'rgb(61, 235, 211)',
  '--icon-color': 'rgb(41, 120, 228)',
  '--border': '1px solid #596980',
  '--border-color': '#596980',
  '--shadow': 'none',
  '--overlay': 'rgba(81, 81, 81, .6)',
  '--disabled-color': 'rgb(221, 221, 221)',
  // '--app-color-1': '#305252',
  // '--app-color-2': 'rgba(178, 208, 245)',
  // '--app-color-3': '#2C78E4',
  // '--app-color-4': 'rgb(1,174,239)',
  // '--border': '1px solid var(--gray-2)',
  // '--app-fg-color': 'var(--gray-9)',
}