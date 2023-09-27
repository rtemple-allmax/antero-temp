import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTabMapComponent } from './equipment-tab-map.component';

describe('EquipmentTabMapComponent', () => {
  let component: EquipmentTabMapComponent;
  let fixture: ComponentFixture<EquipmentTabMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentTabMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentTabMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
