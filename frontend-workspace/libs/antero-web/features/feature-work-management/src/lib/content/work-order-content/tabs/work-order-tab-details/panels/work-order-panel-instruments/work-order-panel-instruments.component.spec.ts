import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPanelInstrumentsComponent } from './work-order-panel-instruments.component';

describe('WorkOrderPanelInstrumentsComponent', () => {
  let component: WorkOrderPanelInstrumentsComponent;
  let fixture: ComponentFixture<WorkOrderPanelInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPanelInstrumentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPanelInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
