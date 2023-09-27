import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderContractorsPanelComponent } from './work-order-contractors-panel.component';

describe('WorkOrderContractorsPanelComponent', () => {
  let component: WorkOrderContractorsPanelComponent;
  let fixture: ComponentFixture<WorkOrderContractorsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderContractorsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderContractorsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
