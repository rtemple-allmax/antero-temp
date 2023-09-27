import { PanelBaseComponent } from '@allmax-angular/antero-web/bases';
import { UILayouts } from '@allmax-angular/shared/ui/grid';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ant-equipment-panel-custom-fields',
  templateUrl: './equipment-panel-custom-fields.component.html',
  styleUrls: ['./equipment-panel-custom-fields.component.scss'],
})
export class EquipmentPanelCustomFieldsComponent extends PanelBaseComponent {
  @Output() public collapsedStateChanged = new EventEmitter<boolean>(); 
  
  public override title = 'Custom Fields';

  public collapsedStateChangeHandler(state: boolean): void {
    this.collapsedStateChanged.emit(state);
  }
}
