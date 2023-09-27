import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import { WorkType } from '@allmax-angular/antero-web/entities';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { SingleEntryFormTextComponent } from '@allmax-angular/shared/ui/single-entry-forms';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'ant-work-type-setup-panel',
  templateUrl: './work-type-setup-panel.component.html',
  styleUrls: ['./work-type-setup-panel.component.scss'],
})
export class WorkTypeSetupPanelComponent implements OnInit {
  @ViewChild('addForm') public addForm: Nullable<SingleEntryFormTextComponent>;

  @Input() public height = '300px';

  public selectedRecord: Nullable<WorkType>;
  public records: WorkType[] = [];
  public icons = { ...allIcons };

  public crud = CrudFunctions.CREATE;
  public crudFunctions: typeof CrudFunctions = CrudFunctions;

  public hoveredID = -1;
  
  public get innerHeight(): string {
    return `calc(${ this.height} - 50px)`
  }

  constructor(private ctrl: CurrentWorkController) { }

  public ngOnInit(): void {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        this.setMode(CrudFunctions.CREATE);
      }
    });
    this.getData();
  }

  public async getData(): Promise<void> {
    this.records = await this.ctrl.getAllWorkTypes();
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
    const result = await this.ctrl.addWorkType(name);
    if (result) {
      this.setMode(CrudFunctions.CREATE);
      this.getData();
    }
  }

  public async editRecord(name: string): Promise<void> {
    if (this.selectedRecord) {
      const result = await this.ctrl.updateWorkType({ ...this.selectedRecord, name });
      if (result) {
        this.setMode(CrudFunctions.CREATE);
        this.getData();
      }
    }
  }

  public async deleteRecord(): Promise<void> {
    if (this.selectedRecord) {
      const result = await this.ctrl.deleteWorkType(this.selectedRecord);
      if (result) {
        this.setMode(CrudFunctions.CREATE);
        this.getData();
      }
    }
  }
}
