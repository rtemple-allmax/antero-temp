import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatePanelWorkOrdersComponent } from './work-template-panel-work-orders.component';

describe('WorkTemplatePanelWorkOrdersComponent', () => {
  let component: WorkTemplatePanelWorkOrdersComponent;
  let fixture: ComponentFixture<WorkTemplatePanelWorkOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatePanelWorkOrdersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatePanelWorkOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
