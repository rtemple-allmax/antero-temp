import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderCustomizeViewComponent } from './equipment-slider-customize-view.component';

describe('EquipmentSliderCustomizeViewComponent', () => {
  let component: EquipmentSliderCustomizeViewComponent;
  let fixture: ComponentFixture<EquipmentSliderCustomizeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderCustomizeViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderCustomizeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
