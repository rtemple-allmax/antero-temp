import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { CurrentWorkStoreService } from '@allmax-angular/antero-web/state-management/current-work-store';
import { ChecklistItem, Modals } from '@allmax-angular/antero-web/types';
import { ObservableBinding } from '@allmax-angular/shared/types';
import { toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { sortArrayByKeyImmutable } from '@allmax-angular/shared/utils';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ant-checklist-viewer',
  templateUrl: './checklist-viewer.component.html',
  styles: [],
})
export class ChecklistViewerComponent implements OnInit, OnChanges  {
  @Input() public checklist: ChecklistItem[] = [];
  @Input() public height = '25vh';
  @Input() public readonly = false;
  @Input() public editable = false;
  @Input() public stretch = false;

  public bindings: ObservableBinding<boolean>[] = [];

  public icons = { ...toolbarIcons };

  public get ordered(): ChecklistItem[] {
    return sortArrayByKeyImmutable(this.checklist, 'order');
  }

  constructor(
    private antero: AnteroService,
    private workStore: CurrentWorkStoreService
  ) { }

  public ngOnInit(): void {
    this.syncBindings();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.bindings.length === 0) {
      this.syncBindings();
    }
  }

  public syncBindings(): void {
    if (this.ordered.length > 0) {
      this.ordered.forEach((x, i) => {
        this.bindings[i] = new ObservableBinding<boolean>();
        this.bindings[i].set(x.state);
      })
      // this.bindings.forEach(x => x.value$.subscribe(y => console.log('checklist binding', y)));
    }
  }

  public openChecklistEditor(): void {
    this.workStore.checklistToEdit = this.checklist;
    this.antero.openModal(Modals.WORK_ORDER_EDIT_CHECKLIST)
  }
}
