import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderAdminPanelComponent } from './work-order-admin-panel.component';

describe('WorkOrderAdminPanelComponent', () => {
  let component: WorkOrderAdminPanelComponent;
  let fixture: ComponentFixture<WorkOrderAdminPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderAdminPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
