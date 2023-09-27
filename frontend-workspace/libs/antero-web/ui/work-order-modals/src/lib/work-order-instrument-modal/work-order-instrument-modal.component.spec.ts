import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderInstrumentModalComponent } from './work-order-instrument-modal.component';

describe('WorkOrderInstrumentModalComponent', () => {
  let component: WorkOrderInstrumentModalComponent;
  let fixture: ComponentFixture<WorkOrderInstrumentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderInstrumentModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderInstrumentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
