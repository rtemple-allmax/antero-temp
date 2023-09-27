import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPanelToolsComponent } from './work-order-panel-tools.component';

describe('WorkOrderPanelToolsComponent', () => {
  let component: WorkOrderPanelToolsComponent;
  let fixture: ComponentFixture<WorkOrderPanelToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPanelToolsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPanelToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
