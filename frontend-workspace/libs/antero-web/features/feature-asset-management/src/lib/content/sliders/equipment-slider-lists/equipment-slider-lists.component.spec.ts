import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentSliderListsComponent } from './equipment-slider-lists.component';

describe('EquipmentSliderListsComponent', () => {
  let component: EquipmentSliderListsComponent;
  let fixture: ComponentFixture<EquipmentSliderListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentSliderListsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentSliderListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
