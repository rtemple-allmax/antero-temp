import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnteroSectionTestingComponent } from './antero-section-testing/antero-section-testing.component';
import { LayoutPanelModule } from '@allmax-angular/shared/ui/layout-panel';
import { ScrollBoxModule } from '@allmax-angular/shared/ui/scroll-box';

@NgModule({
  imports: [
    CommonModule,
    LayoutPanelModule,
    ScrollBoxModule
  ],
  declarations: [ AnteroSectionTestingComponent ],
  exports: [ AnteroSectionTestingComponent ],
})
export class AnteroSectionTestingModule {}
