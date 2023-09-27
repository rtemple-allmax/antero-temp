import { Filter } from '@allmax-angular/shared/types';
import { miscIcons } from '@allmax-angular/shared/ui/icons';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'amx-filtering-panel',
  templateUrl: './filtering-panel.component.html',
  styleUrls: ['./filtering-panel.component.scss'],
})
export class FilteringPanelComponent {
  @Input() public filters: Filter[] = [];
  
  public icons = { ...miscIcons };

  public currentFilters: any[] = [];

  public filtersOpen = false;

  public openFilters(): void {
    this.filtersOpen = true;
  }

  public closeFilters(): void {
    this.filtersOpen = false;
  }

  public toggleFilters(): void {
    this.filtersOpen = !this.filtersOpen;
  }
}
