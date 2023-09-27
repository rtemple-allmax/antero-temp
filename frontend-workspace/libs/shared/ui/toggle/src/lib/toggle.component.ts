import { bindableProvider, FormfieldBaseComponent } from '@allmax-angular/shared/types';
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'amx-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  providers: [ bindableProvider(ToggleComponent) ]
})
export class ToggleComponent extends FormfieldBaseComponent<boolean> implements OnInit {
  @Input() public state = false;
  @Input() public readonly = false;

  public icons = { ...allIcons };

  public override ngOnInit(): void {
    super.ngOnInit();
    this.value = this.state;
  } 
}
