import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderPartDeleteComponent } from './equipment-slider-part-delete.component';

describe('EquipmentSliderPartDeleteComponent', () => {
  let component: EquipmentSliderPartDeleteComponent;
  let fixture: ComponentFixture<EquipmentSliderPartDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderPartDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderPartDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
