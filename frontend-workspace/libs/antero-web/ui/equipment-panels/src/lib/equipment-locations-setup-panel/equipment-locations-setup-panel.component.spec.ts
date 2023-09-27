import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentLocationsSetupPanelComponent } from './equipment-locations-setup-panel.component';

describe('EquipmentLocationsSetupPanelComponent', () => {
  let component: EquipmentLocationsSetupPanelComponent;
  let fixture: ComponentFixture<EquipmentLocationsSetupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentLocationsSetupPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentLocationsSetupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
