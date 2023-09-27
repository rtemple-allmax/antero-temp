import { LaborControllerService } from '@allmax-angular/antero-web/data-access/labor-controller';
import { LaborType } from '@allmax-angular/antero-web/entities';
import { LaborTypeAddComponent } from '@allmax-angular/antero-web/ui/forms/labor-type-forms';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'ant-labor-type-setup-panel',
  templateUrl: './labor-type-setup-panel.component.html',
  styleUrls: ['./labor-type-setup-panel.component.scss'],
})
export class LaborTypeSetupPanelComponent implements OnInit {
  @ViewChild('addForm') public addForm: Nullable<LaborTypeAddComponent>;

  @Input() public height = '300px';

  public selectedRecord: Nullable<LaborType>;
  public records: LaborType[] = [];
  public icons = { ...allIcons};

  public crud = CrudFunctions.CREATE;
  public crudFunctions: typeof CrudFunctions = CrudFunctions;

  public get addPlaceholder(): string {
    return 'Add Labor Account'
  }

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
    this.records = await this.laborCtrl.getLaborTypes();
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

  public async addRecord(record: LaborType): Promise<void> {
    const result = await this.laborCtrl.addLaborType(record.name || '', record.multiplier);
    if (result) {
      this.addForm?.clear();
      this.setMode(CrudFunctions.CREATE);
      this.getData();
    }
  }

  public async editRecord(record: LaborType): Promise<void> {
    if (this.selectedRecord) {
      const result = await this.laborCtrl.updateLaborType(record);
      if (result) {
        this.addForm?.clear();
        this.setMode(CrudFunctions.CREATE);
        this.getData();
      }
    }
  }

  public async deleteRecord(record: LaborType): Promise<void> {
    if (this.selectedRecord) {
      const result = await this.laborCtrl.deleteLaborType(record);
      if (result) {
        this.addForm?.clear();
        this.setMode(CrudFunctions.CREATE);
        this.getData();
      }
    }
  }
}
