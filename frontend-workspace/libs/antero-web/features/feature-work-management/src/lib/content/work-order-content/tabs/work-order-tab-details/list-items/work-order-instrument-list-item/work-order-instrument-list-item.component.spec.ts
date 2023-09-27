import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderInstrumentListItemComponent } from './work-order-instrument-list-item.component';

describe('WorkOrderInstrumentListItemComponent', () => {
  let component: WorkOrderInstrumentListItemComponent;
  let fixture: ComponentFixture<WorkOrderInstrumentListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderInstrumentListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderInstrumentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
