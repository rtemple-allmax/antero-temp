import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import { WorkStatus } from '@allmax-angular/antero-web/entities';
import { WorkStatusAddComponent } from '@allmax-angular/antero-web/ui/forms/work-status-forms';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { getContrastingColor } from '@allmax-angular/shared/utils';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'ant-work-status-setup-panel',
  templateUrl: './work-status-setup-panel.component.html',
  styleUrls: ['./work-status-setup-panel.component.scss'],
})
export class WorkStatusSetupPanelComponent implements OnInit {
  @ViewChild('addForm') public addForm: Nullable<WorkStatusAddComponent>;

  @Input() public height = '300px';

  public selectedRecord: Nullable<WorkStatus>;
  public records: WorkStatus[] = [];
  public icons = { ...allIcons };

  public crud = CrudFunctions.CREATE;
  public crudFunctions: typeof CrudFunctions = CrudFunctions;
  
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
    this.records = await this.ctrl.getAllStatuses();
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

  public async addRecord(record: WorkStatus): Promise<void> {
    const result = await this.ctrl.addWorkStatus(record.name || '', record.color || "#FFFFFF");
    if (result) {
      this.addForm?.clear();
      this.setMode(CrudFunctions.CREATE);
      this.getData();
    }
  }

  public async editRecord(record: WorkStatus): Promise<void> {
    if (this.selectedRecord) {
      const result = await this.ctrl.updateWorkStatus(record);
      if (result) {
        this.addForm?.clear();
        this.setMode(CrudFunctions.CREATE);
        this.getData();
      }
    }
  }

  public async deleteRecord(record: WorkStatus): Promise<void> {
    if (this.selectedRecord) {
      const result = await this.ctrl.deleteWorkStatus(record);
      if (result) {
        this.addForm?.clear();
        this.setMode(CrudFunctions.CREATE);
        this.getData();
      }
    }
  }

  public getTextColor(hex: string): string {
    return getContrastingColor(hex);
  }

}
