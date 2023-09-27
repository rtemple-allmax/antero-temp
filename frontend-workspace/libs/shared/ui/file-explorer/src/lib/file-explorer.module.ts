import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileExplorerComponent } from './file-explorer.component';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
import { ComboButtonModule } from '@allmax-angular/shared/ui/buttons/combo-button';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { ShortcutButtonModule } from '@allmax-angular/shared/ui/shortcut-button';
import { DropdownButtonModule } from '@allmax-angular/shared/ui/buttons/dropdown-button';
import { FilePickerModule } from '@allmax-angular/shared/ui/file-picker';

@NgModule({
  imports: [
    ComboButtonModule,
    CommonModule,
    DropdownButtonModule,
    FilePickerModule,
    FlexModule,
    GridModule,
    ShortcutButtonModule
  ],
  declarations: [ FileExplorerComponent ],
  exports: [ FileExplorerComponent ],
})
export class FileExplorerModule {}
