import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentWorkPanelComponent } from './equipment-work-panel.component';

describe('EquipmentWorkPanelComponent', () => {
  let component: EquipmentWorkPanelComponent;
  let fixture: ComponentFixture<EquipmentWorkPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentWorkPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentWorkPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
