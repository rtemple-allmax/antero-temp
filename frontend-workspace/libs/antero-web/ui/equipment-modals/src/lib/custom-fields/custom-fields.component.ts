import { EquipmentControllerService } from '@allmax-angular/antero-web/data-access/equipment-controller';
import { CustomFieldNames } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit } from '@angular/core';

interface CustomFieldName {
  id: string;
  label: string;
}

@Component({
  selector: 'ant-custom-fields',
  templateUrl: './custom-fields.component.html',
  styleUrls: ['./custom-fields.component.scss'],
})
export class CustomFieldsComponent implements OnInit {
  private fields: Nullable<CustomFieldNames>;
  public fieldList: CustomFieldName[] = [];

  constructor(
    private antero: AnteroService,
    private eqCtrl: EquipmentControllerService
  ) {}

  public ngOnInit(): void {
    this.getFields();
  }

  public async getFields(): Promise<void>  {
    this.fields = await this.eqCtrl.getCustomFieldLabels();
    if (this.fields) {
      for (const key in this.fields) {
        if (key.includes('equipmentCustom')) {
          if (this.fields[key] !== null)
          this.fieldList.push({ id: key, label: this.fields[key]})
        }
      }
    }
    console.log('field list', this.fieldList)
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }
}
  