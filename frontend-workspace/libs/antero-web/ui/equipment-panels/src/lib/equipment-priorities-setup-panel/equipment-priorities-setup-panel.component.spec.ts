import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPrioritiesSetupPanelComponent } from './equipment-priorities-setup-panel.component';

describe('EquipmentPrioritiesSetupPanelComponent', () => {
  let component: EquipmentPrioritiesSetupPanelComponent;
  let fixture: ComponentFixture<EquipmentPrioritiesSetupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPrioritiesSetupPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPrioritiesSetupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
