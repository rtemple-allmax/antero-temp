import { CardControl, CardIndicator, CardOption } from '@allmax-angular/shared/ui/card'
import { allIcons } from '@allmax-angular/shared/ui/icons';
import { Component, Input } from '@angular/core'

@Component({ template: ''})
export class CardBaseComponent {
  @Input() public showHoverEffect = true;
  @Input() public static = false;

  public icons = { ...allIcons };
  
  public options: CardOption[] = [];
  public controls: CardControl[] = [];
  public indicators: CardIndicator[] = [];
}