import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPanelContractorsComponent } from './work-order-panel-contractors.component';

describe('WorkOrderPanelContractorsComponent', () => {
  let component: WorkOrderPanelContractorsComponent;
  let fixture: ComponentFixture<WorkOrderPanelContractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPanelContractorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPanelContractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
