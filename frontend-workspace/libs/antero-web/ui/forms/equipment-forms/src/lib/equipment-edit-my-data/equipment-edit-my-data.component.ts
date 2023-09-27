import { Component, OnInit } from '@angular/core';
import { EquipmentFormBaseComponent } from '../equipment-form.base';

@Component({
  selector: 'ant-equipment-edit-my-data',
  templateUrl: './equipment-edit-my-data.component.html',
  styleUrls: ['./equipment-edit-my-data.component.scss'],
})
export class EquipmentEditMyDataComponent extends EquipmentFormBaseComponent implements OnInit {
  public myData: any[] = [];

  public override ngOnInit(): void {
    super.ngOnInit();
    const d = this.persistence.get();
    if (d) {
      this.myData = d.equipmentMyData;
    }
  }

  public check(label: string): boolean {
    return this.myData.find(x => x?.label?.toLowerCase() === label.toLowerCase()) !== undefined;
  }

  public getOrder(label: string) {
    const found = this.myData.find(x => x?.label?.toLowerCase() === label.toLowerCase());
    if (found) {
      return found.order;
    }
    return -1;
  }
}


