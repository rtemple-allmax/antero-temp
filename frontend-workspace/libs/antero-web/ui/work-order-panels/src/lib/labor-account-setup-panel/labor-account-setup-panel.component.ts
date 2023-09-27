import { LaborControllerService } from '@allmax-angular/antero-web/data-access/labor-controller';
import { LaborAccount } from '@allmax-angular/antero-web/entities';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { SingleEntryFormTextComponent } from '@allmax-angular/shared/ui/single-entry-forms';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'ant-labor-account-setup-panel',
  templateUrl: './labor-account-setup-panel.component.html',
  styleUrls: ['./labor-account-setup-panel.component.scss'],
})
export class LaborAccountSetupPanelComponent implements OnInit {
  @ViewChild('addForm') public addForm: Nullable<SingleEntryFormTextComponent>;

  @Input() public height = '300px';

  public selectedRecord: Nullable<LaborAccount>;
  public records: LaborAccount[] = [];
  public icons = { ...allIcons };

  public crud = CrudFunctions.CREATE;
  public crudFunctions: typeof CrudFunctions = CrudFunctions;

  public hoveredID = -1;

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
    this.records = await this.laborCtrl.getLaborAccounts();
  }

  public setMode(crud: CrudFunctions, record: any = null): void {
    this.crud = crud;
    this.selectedRecord = record;
    switch (this.crud) {
      case CrudFunctions.CREATE:
        this.addForm?.enableAndFocus();
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

  public async addRecord(name: string): Promise<void> {
    const result = await this.laborCtrl.addLaborAccount(name);
    if (result) {
      this.setMode(CrudFunctions.CREATE);
      this.getData();
    }
  }

  public async editRecord(name: string): Promise<void> {
    if (this.selectedRecord) {
      const result = await this.laborCtrl.updateLaborAccount({ ...this.selectedRecord, name });
      if (result) {
        this.setMode(CrudFunctions.CREATE);
        this.getData();
      }
    }
  }

  public async deleteRecord(): Promise<void> {
    if (this.selectedRecord) {
      const result = await this.laborCtrl.deleteLaborAccount(this.selectedRecord);
      if (result) {
        this.setMode(CrudFunctions.CREATE);
        this.getData();
      }
    }
  }
}
