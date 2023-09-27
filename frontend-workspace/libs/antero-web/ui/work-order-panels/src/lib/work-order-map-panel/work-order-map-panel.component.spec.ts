import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderMapPanelComponent } from './work-order-map-panel.component';

describe('WorkOrderMapPanelComponent', () => {
  let component: WorkOrderMapPanelComponent;
  let fixture: ComponentFixture<WorkOrderMapPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderMapPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderMapPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
