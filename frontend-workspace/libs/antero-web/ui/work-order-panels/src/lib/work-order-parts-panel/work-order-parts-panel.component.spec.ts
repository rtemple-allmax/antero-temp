import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrderPartsPanelComponent } from './work-order-parts-panel.component';

describe('WorkOrderPartsPanelComponent', () => {
  let component: WorkOrderPartsPanelComponent;
  let fixture: ComponentFixture<WorkOrderPartsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOrderPartsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkOrderPartsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
