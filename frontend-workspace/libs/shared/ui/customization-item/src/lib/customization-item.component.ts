import { DataFieldUIState } from '@allmax-angular/antero-web/features/feature-persistence';
import { Nullable } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';

export interface CustomizationItemData {
  visibility: boolean;
  favorite: boolean;
  label: string;
}

@Component({
  selector: 'amx-customization-item',
  templateUrl: './customization-item.component.html',
  styleUrls: ['./customization-item.component.scss'],
})
export class CustomizationItemComponent {
  @Input() public item: Nullable<DataFieldUIState>;

  @Input() title = '';
  @HostBinding('attr.data-id') public dataID = this.title;

  @Output() public visibilityChanged = new EventEmitter<DataFieldUIState>();
  @Output() public favoriteChanged = new EventEmitter<DataFieldUIState>();

  public icons = { ...allIcons };

  public toggleVisibility(): void {
    if (this.item) {
      this.visibilityChanged.emit(this.item);
    }
  }

  public toggleFavorite(): void {
    if (this.item) {
      this.favoriteChanged.emit(this.item);
    }
  }
}
