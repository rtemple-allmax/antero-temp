import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPanelLaborComponent } from './work-order-panel-labor.component';

describe('WorkOrderPanelLaborComponent', () => {
  let component: WorkOrderPanelLaborComponent;
  let fixture: ComponentFixture<WorkOrderPanelLaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPanelLaborComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPanelLaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
