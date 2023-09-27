import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadingCardComponent } from './reading-card.component';
import { CardModule } from '@allmax-angular/shared/ui/card';
import { ReadOnlyBoxModule} from '@allmax-angular/shared/ui/read-only-box';

@NgModule({
  imports: [
    CardModule,
    CommonModule,
    ReadOnlyBoxModule
  ],
  declarations: [ ReadingCardComponent ],
  exports: [ ReadingCardComponent ],
})
export class ReadingCardModule {}
