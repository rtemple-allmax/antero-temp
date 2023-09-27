import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartQuantityCardComponent } from './part-quantity-card.component';
import { CardModule } from '@allmax-angular/shared/ui/card';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { ReadOnlyBoxModule } from '@allmax-angular/shared/ui/read-only-box';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    GridModule,
    ReadOnlyBoxModule
  ],
  declarations: [ PartQuantityCardComponent ],
  exports: [ PartQuantityCardComponent ],
})
export class PartQuantityCardModule {}
