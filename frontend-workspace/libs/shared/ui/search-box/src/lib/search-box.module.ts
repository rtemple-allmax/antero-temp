import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './search-box.component';
import { IconModule } from '@allmax-angular/shared/ui/icon';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    FormsModule,
    IconButtonModule,
    IconModule
  ],
  declarations: [ SearchBoxComponent ],
  exports: [ SearchBoxComponent ],
})
export class SearchBoxModule {}
