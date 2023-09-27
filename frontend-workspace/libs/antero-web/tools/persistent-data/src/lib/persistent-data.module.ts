import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersistentDataComponent } from './persistent-data.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PersistentDataComponent],
  exports: [PersistentDataComponent],
})
export class PersistentDataModule {}
