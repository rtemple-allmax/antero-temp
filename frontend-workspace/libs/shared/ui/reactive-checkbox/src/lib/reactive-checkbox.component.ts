import { Nullable } from '@allmax-angular/shared/types';
import { Component, OnInit, inject, AfterViewInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'amx-reactive-checkbox',
  templateUrl: './reactive-checkbox.component.html',
  styleUrls: ['./reactive-checkbox.component.scss'],
})
export class ReactiveCheckboxComponent {
  // private fb = inject(FormBuilder);
  
  // @Input() public form: FormGroup = this.fb.group({});
  @Input() public name = 'state';

  
}
