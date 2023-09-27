import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentMapPanelComponent } from './equipment-map-panel.component';

describe('EquipmentMapPanelComponent', () => {
  let component: EquipmentMapPanelComponent;
  let fixture: ComponentFixture<EquipmentMapPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentMapPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentMapPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
