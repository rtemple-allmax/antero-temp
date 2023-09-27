import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentGroupsSetupPanelComponent } from './equipment-groups-setup-panel.component';

describe('EquipmentGroupsSetupPanelComponent', () => {
  let component: EquipmentGroupsSetupPanelComponent;
  let fixture: ComponentFixture<EquipmentGroupsSetupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentGroupsSetupPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentGroupsSetupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
