import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { LinkButtonModule } from '@allmax-angular/shared/ui/buttons/link-button';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';

@NgModule({
  imports: [
    ComboButtonModule,
    CommonModule,
    FlexModule,
    LinkButtonModule,
    IconButtonModule
  ],
  declarations: [ MapComponent ],
  exports: [ MapComponent ],
})
export class MapModule { }
