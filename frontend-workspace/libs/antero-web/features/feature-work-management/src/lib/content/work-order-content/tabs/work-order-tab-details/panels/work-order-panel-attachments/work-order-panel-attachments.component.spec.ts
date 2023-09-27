import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPanelAttachmentsComponent } from './work-order-panel-attachments.component';

describe('WorkOrderPanelAttachmentsComponent', () => {
  let component: WorkOrderPanelAttachmentsComponent;
  let fixture: ComponentFixture<WorkOrderPanelAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPanelAttachmentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPanelAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
