import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPanelTaskComponent } from './work-order-panel-task.component';

describe('WorkOrderPanelTaskComponent', () => {
  let component: WorkOrderPanelTaskComponent;
  let fixture: ComponentFixture<WorkOrderPanelTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPanelTaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPanelTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
