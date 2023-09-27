import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderViewerComponent } from './work-order-viewer.component';

describe('WorkOrderViewerComponent', () => {
  let component: WorkOrderViewerComponent;
  let fixture: ComponentFixture<WorkOrderViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
