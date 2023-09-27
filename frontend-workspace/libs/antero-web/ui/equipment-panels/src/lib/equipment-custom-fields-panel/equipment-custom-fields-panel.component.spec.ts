import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentCustomFieldsPanelComponent } from './equipment-custom-fields-panel.component';

describe('EquipmentCustomFieldsPanelComponent', () => {
  let component: EquipmentCustomFieldsPanelComponent;
  let fixture: ComponentFixture<EquipmentCustomFieldsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentCustomFieldsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentCustomFieldsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
