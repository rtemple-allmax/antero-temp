import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { Modals, SectionTypes, sectionTypesToLabelsMap } from '@allmax-angular/antero-web/types';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { PopoverButtonTypes } from '@allmax-angular/shared/ui/buttons/popover-button';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { getDateString, getDateTimeString, unsubscribe, numberToCurrencyFormatter } from '@allmax-angular/shared/utils';
import { Component, ElementRef, OnDestroy, inject } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({ template: '' })
export class ListItemBaseComponent implements OnDestroy {
  public icons = { ...allIcons };

  public subs: Subscription[] = [];
  public hovered = false;

  public crudFunctions: typeof CrudFunctions = CrudFunctions;
  public modals: typeof Modals = Modals;
  public popoverTypes: typeof PopoverButtonTypes = PopoverButtonTypes;

  protected el = inject(ElementRef);
  protected antero = inject(AnteroService);
  
  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

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