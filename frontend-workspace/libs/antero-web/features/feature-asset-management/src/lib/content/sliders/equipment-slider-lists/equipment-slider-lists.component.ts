import { SliderBaseComponent } from '@allmax-angular/antero-web/bases';
import { Nullable } from '@allmax-angular/shared/types';
import { AccordionContainerComponent } from '@allmax-angular/shared/ui/accordion';
import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ant-equipment-slider-lists',
  templateUrl: './equipment-slider-lists.component.html',
  styleUrls: ['./equipment-slider-lists.component.scss'],
})
export class EquipmentSliderListsComponent extends SliderBaseComponent implements AfterViewInit {
  @ViewChild(AccordionContainerComponent) public accordion: Nullable<AccordionContainerComponent>;

  public accordionIndex = -1;

  public ngAfterViewInit(): void {
    if (this.accordion) {
      this.subs.push(this.accordion.currentIndex$.subscribe(x => this.accordionIndex = x));
    }
  }
}
