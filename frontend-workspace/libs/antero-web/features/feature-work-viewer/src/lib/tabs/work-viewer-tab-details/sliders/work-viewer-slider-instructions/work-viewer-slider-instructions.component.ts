import { SliderBaseComponent } from '@allmax-angular/antero-web/bases';
import { UILayouts } from '@allmax-angular/shared/ui/grid';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ant-work-viewer-slider-instructions',
  templateUrl: './work-viewer-slider-instructions.component.html',
  styleUrls: ['./work-viewer-slider-instructions.component.scss'],
})
export class WorkViewerSliderInstructionsComponent extends SliderBaseComponent implements OnInit {
  public waiting = true;

  public uiLayout = UILayouts.COLS_2;
  
  public ngOnInit(): void {
    // This is a hack.  For some reason this component pushes the window content out of the way during slideIn.  I think
    // it has to do with that they are both absolutely positioned and I am not setting the zindex of either one but since this fixed
    // it, I am not sure
    setTimeout(() => this.waiting = false, 100)
  }
}
