import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderContentComponent } from './work-order-content.component';

describe('WorkOrderContentComponent', () => {
  let component: WorkOrderContentComponent;
  let fixture: ComponentFixture<WorkOrderContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
