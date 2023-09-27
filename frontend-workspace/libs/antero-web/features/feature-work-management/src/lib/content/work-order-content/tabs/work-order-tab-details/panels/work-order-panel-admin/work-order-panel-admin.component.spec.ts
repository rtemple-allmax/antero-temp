import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPanelAdminComponent } from './work-order-panel-admin.component';

describe('WorkOrderPanelAdminComponent', () => {
  let component: WorkOrderPanelAdminComponent;
  let fixture: ComponentFixture<WorkOrderPanelAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPanelAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPanelAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
