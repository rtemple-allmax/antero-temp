import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderDetailsPanelComponent } from './work-order-details-panel.component';

describe('WorkOrderDetailsPanelComponent', () => {
  let component: WorkOrderDetailsPanelComponent;
  let fixture: ComponentFixture<WorkOrderDetailsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderDetailsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderDetailsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
