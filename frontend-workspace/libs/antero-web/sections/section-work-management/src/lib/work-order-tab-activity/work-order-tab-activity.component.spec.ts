import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderTabActivityComponent } from './work-order-tab-activity.component';

describe('WorkOrderTabActivityComponent', () => {
  let component: WorkOrderTabActivityComponent;
  let fixture: ComponentFixture<WorkOrderTabActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderTabActivityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderTabActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
