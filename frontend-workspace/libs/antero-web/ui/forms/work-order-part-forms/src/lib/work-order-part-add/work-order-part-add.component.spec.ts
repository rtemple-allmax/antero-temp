import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPartAddComponent } from './work-order-part-add.component';

describe('WorkOrderPartAddComponent', () => {
  let component: WorkOrderPartAddComponent;
  let fixture: ComponentFixture<WorkOrderPartAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPartAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPartAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
