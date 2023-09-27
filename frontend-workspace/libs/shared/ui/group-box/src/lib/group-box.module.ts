import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupBoxComponent } from './group-box.component';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { FlexModule } from '@allmax-angular/shared/ui/flex';

@NgModule({
  imports: [
    CommonModule,
    IconButtonModule,
    FlexModule
  ],
  declarations: [GroupBoxComponent],
  exports: [GroupBoxComponent]
})
export class GroupBoxModule {}
