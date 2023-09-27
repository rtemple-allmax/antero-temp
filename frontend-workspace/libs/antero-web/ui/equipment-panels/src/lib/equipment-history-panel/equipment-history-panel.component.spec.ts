import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentHistoryPanelComponent } from './equipment-history-panel.component';

describe('EquipmentHistoryPanelComponent', () => {
  let component: EquipmentHistoryPanelComponent;
  let fixture: ComponentFixture<EquipmentHistoryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentHistoryPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentHistoryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
