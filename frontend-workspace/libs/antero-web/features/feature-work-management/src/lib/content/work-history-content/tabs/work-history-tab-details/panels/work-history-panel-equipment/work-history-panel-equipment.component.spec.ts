import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryPanelEquipmentComponent } from './work-history-panel-equipment.component';

describe('WorkHistoryPanelEquipmentComponent', () => {
  let component: WorkHistoryPanelEquipmentComponent;
  let fixture: ComponentFixture<WorkHistoryPanelEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryPanelEquipmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryPanelEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
