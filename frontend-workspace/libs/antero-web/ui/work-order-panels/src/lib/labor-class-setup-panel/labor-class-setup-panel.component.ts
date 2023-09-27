import { LaborControllerService } from '@allmax-angular/antero-web/data-access/labor-controller';
import { LaborClass } from '@allmax-angular/antero-web/entities';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { numberToCurrencyFormatter } from '@allmax-angular/shared/utils'
import { LaborClassAddComponent } from '@allmax-angular/antero-web/ui/forms/labor-class-forms';

@Component({
  selector: 'ant-labor-class-setup-panel',
  templateUrl: './labor-class-setup-panel.component.html',
  styleUrls: ['./labor-class-setup-panel.component.scss'],
})
export class LaborClassSetupPanelComponent implements OnInit {
  @ViewChild('addForm') public addForm: Nullable<LaborClassAddComponent>;

  @Input() public height = '300px';

  public selectedRecord: Nullable<LaborClass>;
  public records: LaborClass[] = [];
  public icons = { ...allIcons };

  public crud = CrudFunctions.CREATE;
  public crudFunctions: typeof CrudFunctions = CrudFunctions;
  
  public get innerHeight(): string {
    return `calc(${ this.height} - 50px)`
  }

  constructor(private laborCtrl: LaborControllerService) { }

  public ngOnInit(): void {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        this.setMode(CrudFunctions.CREATE);
      }
    });
    this.getData();
  }

  public async getData(): Promise<void> {
    this.records = await this.laborCtrl.getLaborClasses();
  }

  public setMode(crud: CrudFunctions, record: any = null): void {
    this.crud = crud;
    this.selectedRecord = record;
    switch (this.crud) {
      case CrudFunctions.CREATE:
        this.addForm?.enableAndFocusFirstField();
        break;
      case CrudFunctions.UPDATE:
      case CrudFunctions.DELETE:
        this.addForm?.disable();
        break;
    }
    document.dispatchEvent(new Event('click', { bubbles: false }))
  }

  public showEditForm(record: any): boolean {
    if (this.crud !== CrudFunctions.UPDATE || !this.selectedRecord || this.selectedRecord.id !== record.id) {
      return false;
    } else {
      return true;
    }
  }

  public async addRecord(record: LaborClass): Promise<void> {
    const result = await this.laborCtrl.addLaborClass(record.name || '', record.rate || 1);
    if (result) {
      this.addForm?.clear();
      this.setMode(CrudFunctions.CREATE);
      this.getData();
    }
  }

  public async editRecord(record: LaborClass): Promise<void> {
    if (this.selectedRecord) {
      const result = await this.laborCtrl.updateLaborClass(record);
      if (result) {
        this.addForm?.clear();
        this.setMode(CrudFunctions.CREATE);
        this.getData();
      }
    }
  }

  public async deleteRecord(record: LaborClass): Promise<void> {
    if (this.selectedRecord) {
      const result = await this.laborCtrl.deleteLaborClass(record);
      if (result) {
        this.addForm?.clear();
        this.setMode(CrudFunctions.CREATE);
        this.getData();
      }
    }
  }

  public currencyFormatter(val: number): string {
    return numberToCurrencyFormatter(val)
  }
}
