import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPartDeleteComponent } from './work-order-part-delete.component';

describe('WorkOrderPartDeleteComponent', () => {
  let component: WorkOrderPartDeleteComponent;
  let fixture: ComponentFixture<WorkOrderPartDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPartDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPartDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
