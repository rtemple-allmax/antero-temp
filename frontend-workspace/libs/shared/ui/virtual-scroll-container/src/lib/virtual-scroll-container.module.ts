import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollContainerComponent } from './virtual-scroll-container.component';
// import { ScrollingModule } from '@angular/cdk/scrolling';
import { GridModule } from '@allmax-angular/shared/ui/grid';
import { CardModule } from '@allmax-angular/shared/ui/card';
import { SpacerModule } from '@allmax-angular/shared/ui/spacer';
import { FlexModule } from '@allmax-angular/shared/ui/flex';
// import { NgxVirtualScrollModule } from '@lithiumjs/ngx-virtual-scroll';

@NgModule({
  imports: [
    CommonModule,
    // NgxVirtualScrollModule,
    // ScrollingModule,
    GridModule,
    FlexModule,
    CardModule,
    SpacerModule
  ],
  declarations: [ VirtualScrollContainerComponent ],
  exports: [ VirtualScrollContainerComponent ],
})
export class VirtualScrollContainerModule {}

