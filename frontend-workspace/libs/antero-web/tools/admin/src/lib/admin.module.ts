import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { TabsModule } from '@allmax-angular/shared/ui/tabs';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';

@NgModule({
  imports: [
    CommonModule,
    FlexModule,
    GridModule,
    GroupBoxModule,
    IconButtonModule,
    ModalWindowModule,
    TabsModule
  ],
  declarations: [ AdminComponent ],
  exports: [ AdminComponent ],
})
export class AdminModule {}
