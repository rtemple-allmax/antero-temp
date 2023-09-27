import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderCopyComponent } from './equipment-slider-copy.component';

describe('EquipmentSliderCopyComponent', () => {
  let component: EquipmentSliderCopyComponent;
  let fixture: ComponentFixture<EquipmentSliderCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderCopyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
