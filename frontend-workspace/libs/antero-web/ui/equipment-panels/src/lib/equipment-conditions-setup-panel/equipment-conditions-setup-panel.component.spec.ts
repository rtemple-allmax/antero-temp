import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentConditionsSetupPanelComponent } from './equipment-conditions-setup-panel.component';

describe('EquipmentConditionsSetupPanelComponent', () => {
  let component: EquipmentConditionsSetupPanelComponent;
  let fixture: ComponentFixture<EquipmentConditionsSetupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentConditionsSetupPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentConditionsSetupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
