import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPartEditComponent } from './work-order-part-edit.component';

describe('WorkOrderPartEditComponent', () => {
  let component: WorkOrderPartEditComponent;
  let fixture: ComponentFixture<WorkOrderPartEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPartEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPartEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
