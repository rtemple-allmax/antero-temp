import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentCategoriesSetupPanelComponent } from './equipment-categories-setup-panel.component';

describe('EquipmentCategoriesSetupPanelComponent', () => {
  let component: EquipmentCategoriesSetupPanelComponent;
  let fixture: ComponentFixture<EquipmentCategoriesSetupPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentCategoriesSetupPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentCategoriesSetupPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
