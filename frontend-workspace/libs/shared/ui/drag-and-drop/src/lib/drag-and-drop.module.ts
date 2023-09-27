import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropComponent } from './drag-and-drop.component';
import { GridModule } from '@allmax-angular/shared/ui/grid';

@NgModule({
  imports: [
    CommonModule,
    GridModule
  ],
  declarations: [ DragAndDropComponent ],
  exports: [ DragAndDropComponent ],
})
export class DragAndDropModule {}
