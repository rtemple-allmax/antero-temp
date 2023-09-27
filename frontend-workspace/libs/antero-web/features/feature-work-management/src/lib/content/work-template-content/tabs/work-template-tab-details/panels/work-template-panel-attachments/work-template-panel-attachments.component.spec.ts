import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatePanelAttachmentsComponent } from './work-template-panel-attachments.component';

describe('WorkTemplatePanelAttachmentsComponent', () => {
  let component: WorkTemplatePanelAttachmentsComponent;
  let fixture: ComponentFixture<WorkTemplatePanelAttachmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatePanelAttachmentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatePanelAttachmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
