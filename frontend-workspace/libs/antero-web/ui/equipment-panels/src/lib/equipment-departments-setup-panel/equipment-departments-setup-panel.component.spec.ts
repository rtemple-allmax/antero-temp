import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentDepartmentsSetupPanelComponent } from './equipment-departments-setup-panel.component';

describe('EquipmentDepartmentsSetupPanelComponent', () => {
  let component: EquipmentDepartmentsSetupPanelComponent;
  let fixture: ComponentFixture<EquipmentDepartmentsSetupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentDepartmentsSetupPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentDepartmentsSetupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
