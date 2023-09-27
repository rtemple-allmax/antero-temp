import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkHistoryCardComponent } from './work-history-card.component';
import { CardModule } from '@allmax-angular/shared/ui/card';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';

@NgModule({
  imports: [
    CardModule,
    CommonModule,
    GridModule,
    ReadOnlyBoxModule,
    SpacerModule
  ],
  declarations: [ WorkHistoryCardComponent ],
  exports: [ WorkHistoryCardComponent ],
})
export class WorkHistoryCardModule {}
