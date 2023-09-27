import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentCriticalitySetupPanelComponent } from './equipment-criticality-setup-panel.component';

describe('EquipmentCriticalitySetupPanelComponent', () => {
  let component: EquipmentCriticalitySetupPanelComponent;
  let fixture: ComponentFixture<EquipmentCriticalitySetupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentCriticalitySetupPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentCriticalitySetupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
