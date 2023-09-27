import { SliderBaseComponent } from '@allmax-angular/antero-web/bases';
import { Equipment } from '@allmax-angular/antero-web/entities';
import { PersistenceService, PersistentDataKeys } from '@allmax-angular/antero-web/services/persistence';
import { DataStores } from '@allmax-angular/antero-web/types';
import { MyDataField, MyDataFieldTypes, Nullable } from '@allmax-angular/shared/types';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { WorkViewerStorePropNames } from '../../../../work-viewer.schema';

@Component({
  selector: 'ant-work-viewer-slider-equipment',
  templateUrl: './work-viewer-slider-equipment.component.html',
  styleUrls: ['./work-viewer-slider-equipment.component.scss'],
})
export class WorkViewerSliderEquipmentComponent extends SliderBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  public fields: Array<MyDataField> = [];
  public record: Nullable<Equipment>;

  private persistence = inject(PersistenceService);
  private cdr = inject(ChangeDetectorRef);

  public ngOnInit(): void {
    const data = this.persistence.get();
    if (data) {
      this.fields = data[PersistentDataKeys.EQUIPMENT_MY_DATA];
    }
    this.cdr.detectChanges();
  }

  public ngAfterViewInit(): void {
    const sub = this.state.getStore(DataStores.VIEWER_WORK)?.observe(WorkViewerStorePropNames.SELECTED_WORK_ORDER)?.subscribe(x => {
      if (x) {
        this.record = x.equipment;
      }
    });
    if (sub) { this.subs.push(sub); }
  }

  public override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.cdr.detach();
  }

  public getFieldValue(field: MyDataField): any {
    if (!this.record) { return null; }
    switch (field.type) {
      case MyDataFieldTypes.VALUE:
        return this.record[field.propName];
      case MyDataFieldTypes.OBJECT:
        if (this.record[field.propName] && field.displayExpr) {
          return this.record[field.propName][field.displayExpr];
        }
        break;
      case MyDataFieldTypes.DATE:
        return this.getDateString(this.record[field.propName]);
      case MyDataFieldTypes.DATETIME:
        return this.getDateTimeString(this.record[field.propName]);
      case MyDataFieldTypes.CURRENCY:
        return this.formatAsCurrency(this.record[field.propName]);
    }
  }
}
