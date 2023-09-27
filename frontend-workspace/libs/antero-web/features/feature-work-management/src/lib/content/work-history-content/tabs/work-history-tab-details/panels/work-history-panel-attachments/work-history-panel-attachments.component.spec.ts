import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryPanelAttachmentsComponent } from './work-history-panel-attachments.component';

describe('WorkHistoryPanelAttachmentsComponent', () => {
  let component: WorkHistoryPanelAttachmentsComponent;
  let fixture: ComponentFixture<WorkHistoryPanelAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkHistoryPanelAttachmentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkHistoryPanelAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
