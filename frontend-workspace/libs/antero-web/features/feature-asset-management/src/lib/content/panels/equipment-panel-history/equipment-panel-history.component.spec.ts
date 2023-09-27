import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentPanelHistoryComponent } from './equipment-panel-history.component';

describe('EquipmentPanelHistoryComponent', () => {
  let component: EquipmentPanelHistoryComponent;
  let fixture: ComponentFixture<EquipmentPanelHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipmentPanelHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EquipmentPanelHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
