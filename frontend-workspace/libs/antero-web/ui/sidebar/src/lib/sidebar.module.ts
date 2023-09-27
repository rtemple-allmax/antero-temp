import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { IconButtonModule } from '@allmax-angular/shared/ui/buttons/icon-button';
import { SidebarButtonComponent } from './sidebar-button/sidebar-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { GridModule } from '@allmax-angular/shared/ui/grid';

@NgModule({
  imports: [
    CommonModule,
    IconButtonModule,
    FlexModule,
    FontAwesomeModule,
    GridModule
  ],
  declarations: [
    SidebarComponent,
    SidebarButtonComponent 
  ],
  exports: [ SidebarComponent ]
})
export class SidebarModule {}
