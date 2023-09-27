import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteConfirmationComponent } from './delete-confirmation.component';
import { ConfirmationModule } from '@allmax-angular/shared/ui/confirmation';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';

@NgModule({
  imports: [
    CommonModule,
    ConfirmationModule,
    GridModule,
    SpacerModule
  ],
  declarations: [ DeleteConfirmationComponent ],
  exports: [ DeleteConfirmationComponent ],
})
export class DeleteConfirmationModule {}
