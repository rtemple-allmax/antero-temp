import { CrudFunctions, Nullable } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { ViewChild, ViewChildren, AfterViewInit, Component, EventEmitter, Input, Output, OnInit, QueryList } from '@angular/core';
import { SingleEntryFormTextComponent } from '@allmax-angular/shared/ui/single-entry-forms';
import { ListItemComponent } from '@allmax-angular/shared/ui/list-item';

export interface Subrecord<T1, T2> {
  parent: T1;
  data: T2;
}

@Component({
  selector: 'amx-list-editor',
  templateUrl: './list-editor.component.html',
  styleUrls: ['./list-editor.component.scss'],
})
export class ListEditorComponent implements OnInit, AfterViewInit {  
  @ViewChild('addForm') public addForm: Nullable<SingleEntryFormTextComponent>;
  @ViewChildren(ListItemComponent) public listItemsRef: Nullable<QueryList<ListItemComponent>>;

  @Input() public records: any[] = [];
  @Input() public displayExpr = 'name';
  @Input() public valueToAdd: Nullable<string>;
  @Input() public typeName: [string, string ] = [ 'Item', 'Items' ];
  @Input() public itemLabels: string[] = [];
  @Input() public height = '40vh';
  @Input() public addPlaceholderPrefix = 'Add New';
  @Input() public allowAdd = true;
  @Input() public allowEdit = true;
  @Input() public allowDelete = true;

  @Output() public addRequested: EventEmitter<string> = new EventEmitter<string>();
  @Output() public editRequested: EventEmitter<any> = new EventEmitter<any>();
  @Output() public deleteRequested: EventEmitter<any> = new EventEmitter<any>();
  
  public selection: any;
  public crud = CrudFunctions.CREATE;
  public list: ListItemComponent[] = [];
  public crudFunctions: typeof CrudFunctions = CrudFunctions;
  public icons = { ...allIcons };

  private adding = false;
    
  public get addPlaceholder(): string {
    return `${ this.addPlaceholderPrefix } ${ this.typeName[0] }`;
  }
  
  public get editableValue(): string {
    if (this.selection && this.displayExpr in this.selection) {
      return this.selection[this.displayExpr];
    }
    return '';
  }
  
  public get innerHeight(): string {
    return `calc(${ this.height} - 60px)`
  }

  public ngOnInit(): void {
    if (this.itemLabels.length > 0 && this.itemLabels.length !== this.records.length) {
      console.log('List Editor items labels do not align to items')
    }
    document.addEventListener('keyup', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (this.crud === CrudFunctions.UPDATE) {
          this.setMode(CrudFunctions.CREATE);
        }
      } 
    })
  }

  public ngAfterViewInit(): void {
    this.listItemsRef?.changes.subscribe((q: QueryList<ListItemComponent>) => {
      this.list = q.toArray();
      if (this.adding) {
        const record = q.last;
        record.scrollIntoView();
        this.adding = false;
      }
    });
  }
  
  public setMode(crud: CrudFunctions, record: any = null): void {
    switch(crud) {
      case CrudFunctions.CREATE:
        if (this.allowAdd) {
          this.crud = CrudFunctions.CREATE;
          this.selection = null;
          this.addForm?.enableAndFocus();
        } else {
          this.crud = CrudFunctions.READ;
        }
        break;
      case CrudFunctions.UPDATE:
        if (this.allowEdit) {
          this.selection = record;
          this.crud = CrudFunctions.UPDATE;
          this.addForm?.disable();
          document.dispatchEvent(new Event('click', { bubbles: false }))
        } else {
          this.crud = CrudFunctions.READ;
        }
        break;
      case CrudFunctions.DELETE:
        if (this.allowDelete) {
          this.selection = record;
          this.crud = CrudFunctions.DELETE;
          document.dispatchEvent(new Event('click', { bubbles: false }))
        } else {
          this.crud = CrudFunctions.READ;
        }
        break;
      default:
        this.crud = CrudFunctions.READ;
        break;
    }
  }
  
  public showEditForm(record: any): boolean {
    if (this.crud !== CrudFunctions.UPDATE || !this.selection || this.selection.id !== record.id || this.allowEdit === false) {
      return false;
    } else {
      return true;
    }
  }

  public scrollHandler(): void {
    this.list?.forEach(x => x.closeMenu());
  }
  
  public async addRecord(value: string): Promise<void> {
    this.addRequested.emit(value);
    this.setMode(CrudFunctions.CREATE);
    this.adding = true;
  }

  public async editRecord(value: string): Promise<void> {
    if (this.selection) {
      const record = { ...this.selection, name: value };
      this.editRequested.emit(record);
      this.setMode(CrudFunctions.CREATE);
    }
  }

  public async deleteRecord(): Promise<void>  {
    if (this.selection) {
      this.deleteRequested.emit(this.selection);
      this.setMode(CrudFunctions.CREATE);
    }
  }
  
  public preventPropagation(e: Event): void {
    e.stopPropagation();
  }
}
