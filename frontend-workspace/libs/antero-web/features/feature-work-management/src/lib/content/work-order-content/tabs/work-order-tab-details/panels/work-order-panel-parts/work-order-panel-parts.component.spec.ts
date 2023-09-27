import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPanelPartsComponent } from './work-order-panel-parts.component';

describe('WorkOrderPanelPartsComponent', () => {
  let component: WorkOrderPanelPartsComponent;
  let fixture: ComponentFixture<WorkOrderPanelPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPanelPartsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPanelPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
