import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPanelWorkHistoryComponent } from './equipment-panel-work-history.component';

describe('EquipmentPanelWorkHistoryComponent', () => {
  let component: EquipmentPanelWorkHistoryComponent;
  let fixture: ComponentFixture<EquipmentPanelWorkHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPanelWorkHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPanelWorkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
