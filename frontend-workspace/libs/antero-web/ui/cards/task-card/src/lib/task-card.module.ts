import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card.component';
import { CardModule } from '@allmax-angular/shared/ui/card';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FormattedTextModule } from '@allmax-angular/shared/ui/formatted-text';

@NgModule({
  imports: [
    CardModule,
    CommonModule,
    FormattedTextModule,
    GridModule,
    ReadOnlyBoxModule,
    SpacerModule
  ],
  declarations: [ TaskCardComponent ],
  exports: [ TaskCardComponent ],
})
export class TaskCardModule {}
