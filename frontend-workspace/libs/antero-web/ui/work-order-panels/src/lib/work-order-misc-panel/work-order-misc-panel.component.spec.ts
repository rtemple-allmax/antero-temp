import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderMiscPanelComponent } from './work-order-misc-panel.component';

describe('WorkOrderMiscPanelComponent', () => {
  let component: WorkOrderMiscPanelComponent;
  let fixture: ComponentFixture<WorkOrderMiscPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderMiscPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderMiscPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
