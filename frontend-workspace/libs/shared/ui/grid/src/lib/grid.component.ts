import { Nullable } from '@allmax-angular/shared/types';
import { Component, Input } from '@angular/core';

export enum UILayouts {
  COLS_1,
  COLS_2,
  COLS_3
}

@Component({
  selector: 'amx-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() public columns = 'none';
  @Input() public rows = 'none';
  @Input() public areas = 'none';
  @Input() public gap = '0';
  @Input() public justifyItems = 'stretch';
  @Input() public alignItems = 'stretch';
  @Input() public placeItems: Nullable<string> = undefined;
  @Input() public justifyContent = 'normal';
  @Input() public alignContent = 'normal';
  @Input() public placeContent: Nullable<string> = undefined;
  @Input() public padding = '0px';
  @Input() public border = 'none';
  @Input() public borderRadius = '0';
  @Input() public height = 'auto';
  @Input() public width = '100%';
  @Input() public useLayout = false;
  @Input() public layout = UILayouts.COLS_1;

  public layouts: typeof UILayouts = UILayouts;

  public get styles(): any {
    const obj =  {
      'display': 'grid',
      'grid-template-columns': this.columns,
      'grid-template-rows': this.rows,
      'grid-template-areas': this.areas,
      'gap': this.gap,
      'justify-items': this.justifyItems, // Aligns grid items along the inline (row) axis
      'align-items': this.alignItems, // Aligns grid items along the block (column) axis
      'place-items': this.placeItems, // Shorthand align-items / justify-items
      'justify-content': this.justifyContent, // Aligns the grid within the grid container along the inline (row) axis
      'align-content': this.alignContent, // Aligns the grid within the grid container along the block (column) axis
      'place-content': this.placeContent, // Shorthand align-content / justify-content
      'padding': this.padding,
      'border': this.border,
      'border-radius': this.borderRadius,
      'height': this.height,
      'width': this.width
    }
    return obj;
  }

  public get styles_UseLayout(): any {
    const obj =  {
      'display': 'grid',
      'justify-items': this.justifyItems, // Aligns grid items along the inline (row) axis
      'align-items': this.alignItems, // Aligns grid items along the block (column) axis
      'place-items': this.placeItems, // Shorthand align-items / justify-items
      'justify-content': this.justifyContent, // Aligns the grid within the grid container along the inline (row) axis
      'align-content': this.alignContent, // Aligns the grid within the grid container along the block (column) axis
      'place-content': this.placeContent, // Shorthand align-content / justify-content
      'padding': this.padding,
      'border': this.border,
      'border-radius': this.borderRadius,
      'height': this.height,
      'width': this.width
    }
    return obj;
  }
}

