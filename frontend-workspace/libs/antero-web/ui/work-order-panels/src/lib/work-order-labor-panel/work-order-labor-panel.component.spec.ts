import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderLaborPanelComponent } from './work-order-labor-panel.component';

describe('WorkOrderLaborPanelComponent', () => {
  let component: WorkOrderLaborPanelComponent;
  let fixture: ComponentFixture<WorkOrderLaborPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderLaborPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderLaborPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
