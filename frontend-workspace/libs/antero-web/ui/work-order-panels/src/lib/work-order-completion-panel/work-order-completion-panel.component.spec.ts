import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderCompletionPanelComponent } from './work-order-completion-panel.component';

describe('WorkOrderCompletionPanelComponent', () => {
  let component: WorkOrderCompletionPanelComponent;
  let fixture: ComponentFixture<WorkOrderCompletionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderCompletionPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderCompletionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
