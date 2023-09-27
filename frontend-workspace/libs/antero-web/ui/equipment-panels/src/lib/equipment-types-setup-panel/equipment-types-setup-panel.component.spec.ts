import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentTypesSetupPanelComponent } from './equipment-types-setup-panel.component';

describe('EquipmentTypesSetupPanelComponent', () => {
  let component: EquipmentTypesSetupPanelComponent;
  let fixture: ComponentFixture<EquipmentTypesSetupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentTypesSetupPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentTypesSetupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
