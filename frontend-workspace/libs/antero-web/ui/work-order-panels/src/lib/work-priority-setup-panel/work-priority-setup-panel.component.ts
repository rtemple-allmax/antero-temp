import { CurrentWorkController } from '@allmax-angular/antero-web/data-access/current-work-controller';
import { WorkPriority } from '@allmax-angular/antero-web/entities';
import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { SingleEntryFormTextComponent } from '@allmax-angular/shared/ui/single-entry-forms';
import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'ant-work-priority-setup-panel',
  templateUrl: './work-priority-setup-panel.component.html',
  styleUrls: ['./work-priority-setup-panel.component.scss'],
})
export class WorkPrioritySetupPanelComponent implements OnInit {
  @ViewChild('addForm') public addForm: Nullable<SingleEntryFormTextComponent>;

  @Input() public height = '300px';

  public selectedRecord: Nullable<WorkPriority>;
  public records: WorkPriority[] = [];
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
    this.records = await this.ctrl.getAllWorkPriorities();
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
    const result = await this.ctrl.addWorkPriority(name);
    if (result) {
      this.setMode(CrudFunctions.CREATE);
      this.getData();
    }
  }

  public async editRecord(name: string): Promise<void> {
    if (this.selectedRecord) {
      const result = await this.ctrl.updateWorkPriority({ ...this.selectedRecord, name });
      if (result) {
        this.setMode(CrudFunctions.CREATE);
        this.getData();
      }
    }
  }

  public async deleteRecord(): Promise<void> {
    if (this.selectedRecord) {
      const result = await this.ctrl.deleteWorkPriority(this.selectedRecord);
      if (result) {
        this.setMode(CrudFunctions.CREATE);
        this.getData();
      }
    }
  }
}
