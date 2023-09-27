import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderMapModalComponent } from './work-order-map-modal.component';

describe('WorkOrderMapModalComponent', () => {
  let component: WorkOrderMapModalComponent;
  let fixture: ComponentFixture<WorkOrderMapModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderMapModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderMapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
