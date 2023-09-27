import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSecurityComponent } from './user-security.component';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { TabsModule } from '@allmax-angular/shared/ui/tabs';
import { GroupBoxModule } from '@allmax-angular/shared/ui/group-box';
import { GridModule } from '@allmax-angular/shared/ui/grid';
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
  declarations: [ UserSecurityComponent ],
  exports: [ UserSecurityComponent ],
})
export class UserSecurityModule {}
