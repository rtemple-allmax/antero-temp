import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPanelCustomFieldsComponent } from './equipment-panel-custom-fields.component';

describe('EquipmentPanelCustomFieldsComponent', () => {
  let component: EquipmentPanelCustomFieldsComponent;
  let fixture: ComponentFixture<EquipmentPanelCustomFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPanelCustomFieldsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPanelCustomFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
