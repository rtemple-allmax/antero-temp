import { LabeledState } from '@allmax-angular/shared/types';
import { sortArrayByKeyImmutable, unsubscribe } from '@allmax-angular/shared/utils';
import { Component, OnInit, inject, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';



@Component({
  selector: 'amx-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent implements OnInit, OnDestroy {
  @Input() public checklist: LabeledState[] = [];
  @Output() public changed = new EventEmitter<LabeledState[]>();

  private subs: Subscription[] = [];

  private fb = inject(FormBuilder);

  public form: FormGroup = this.fb.group({
    items: this.fb.array([])
  })

  public get items(): FormArray {
    return this.form.controls['items'] as FormArray;
  }

  public get completedCount(): number {
    return this.items.controls.filter(x => x.value.state).length
  }

  public ngOnInit(): void {
    this.update();
    this.subs.push(this.form.valueChanges.subscribe(x => this.changed.emit(x.items)));
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }
  
  public update(): void {
    for (const item of sortArrayByKeyImmutable(this.checklist, 'order')) {
      const group = this.fb.group({ id: item.id, label: item.label, state: item.state });
      this.items.push(group);
    }
  }
}
