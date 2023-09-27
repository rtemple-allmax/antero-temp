import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderContractorModalComponent } from './work-order-contractor-modal.component';

describe('WorkOrderContractorModalComponent', () => {
  let component: WorkOrderContractorModalComponent;
  let fixture: ComponentFixture<WorkOrderContractorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderContractorModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderContractorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
