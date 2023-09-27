import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPanelCompletionComponent } from './work-order-panel-completion.component';

describe('WorkOrderPanelCompletionComponent', () => {
  let component: WorkOrderPanelCompletionComponent;
  let fixture: ComponentFixture<WorkOrderPanelCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPanelCompletionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPanelCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
