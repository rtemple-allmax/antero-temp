import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { Modals, SectionTypes, sectionTypesToLabelsMap } from '@allmax-angular/antero-web/types';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { PopoverButtonTypes } from '@allmax-angular/shared/ui/buttons/popover-button';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { getDateString, getDateTimeString, numberToCurrencyFormatter } from '@allmax-angular/shared/utils';
import { Component, ElementRef, inject } from '@angular/core';
import { WidgetBaseComponent } from './widget.base';
import { UILayouts } from '@allmax-angular/shared/ui/grid';

@Component({ template: '' })
export class ListItemBaseComponent extends WidgetBaseComponent {
  public icons = { ...allIcons };

  public hovered = false;

  public crudFunctions: typeof CrudFunctions = CrudFunctions;
  public modals: typeof Modals = Modals;
  public popoverTypes: typeof PopoverButtonTypes = PopoverButtonTypes;
  public layouts: typeof UILayouts = UILayouts;

  public itemContextMenuItems: any[] = [];

  protected el = inject(ElementRef);
  protected antero = inject(AnteroService);
    
  public stopPropagation(e: Event): void {
    e.stopPropagation();
  }

  public mouseenterHandler(): void {
    if (!this.hovered) {
      this.hovered = true;
    }
  }

  public mouseleaveHandler(): void {
    if (this.hovered) {
      this.hovered = false;
    }
  }

  public getDateString(val: any): string {
    return getDateString(val);
  }

  public getDateTimeString(val: any): string {
    return getDateTimeString(val);
  }

  public formatAsCurrency(val: Nullable<number>): string {
    if (val) {
      return numberToCurrencyFormatter(val);
    }
    return '';
  }

  public getSectionTypeName(type: SectionTypes): string {
    return sectionTypesToLabelsMap.get(type) || '';
  }
}