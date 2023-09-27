import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderToolsPanelComponent } from './work-order-tools-panel.component';

describe('WorkOrderToolsPanelComponent', () => {
  let component: WorkOrderToolsPanelComponent;
  let fixture: ComponentFixture<WorkOrderToolsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderToolsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderToolsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
