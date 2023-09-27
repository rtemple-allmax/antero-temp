import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderDocumentsPanelComponent } from './work-order-documents-panel.component';

describe('WorkOrderDocumentsPanelComponent', () => {
  let component: WorkOrderDocumentsPanelComponent;
  let fixture: ComponentFixture<WorkOrderDocumentsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderDocumentsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderDocumentsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
