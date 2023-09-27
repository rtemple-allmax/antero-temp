import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderToolModalComponent } from './work-order-tool-modal.component';

describe('WorkOrderToolModalComponent', () => {
  let component: WorkOrderToolModalComponent;
  let fixture: ComponentFixture<WorkOrderToolModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderToolModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderToolModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
