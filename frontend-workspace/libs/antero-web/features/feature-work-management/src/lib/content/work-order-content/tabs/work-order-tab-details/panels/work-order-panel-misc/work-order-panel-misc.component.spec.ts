import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPanelMiscComponent } from './work-order-panel-misc.component';

describe('WorkOrderPanelMiscComponent', () => {
  let component: WorkOrderPanelMiscComponent;
  let fixture: ComponentFixture<WorkOrderPanelMiscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPanelMiscComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPanelMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
