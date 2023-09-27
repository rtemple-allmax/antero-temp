import { ThemingService } from '@allmax-angular/shared/features/theming';
import { miscIcons } from '@allmax-angular/shared/ui/icons';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'amx-view-switch',
  templateUrl: './view-switch.component.html',
  styleUrls: ['./view-switch.component.scss'],
})
export class ViewSwitchComponent {
  @Output() public viewToggled = new EventEmitter<MasterDetailViewTypes>;

  public icons = { ...miscIcons };

  public viewType: MasterDetailViewTypes = MasterDetailViewTypes.LIST;
  public viewTypes: typeof MasterDetailViewTypes = MasterDetailViewTypes;

  constructor(private theming: ThemingService) { }

  public toggleView(type: MasterDetailViewTypes): void {
    this.viewType = type;
    this.viewToggled.emit(this.viewType);
  }
}
