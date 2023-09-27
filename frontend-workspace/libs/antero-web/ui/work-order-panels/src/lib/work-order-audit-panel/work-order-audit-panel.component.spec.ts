import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderAuditPanelComponent } from './work-order-audit-panel.component';

describe('WorkOrderAuditPanelComponent', () => {
  let component: WorkOrderAuditPanelComponent;
  let fixture: ComponentFixture<WorkOrderAuditPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderAuditPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderAuditPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
