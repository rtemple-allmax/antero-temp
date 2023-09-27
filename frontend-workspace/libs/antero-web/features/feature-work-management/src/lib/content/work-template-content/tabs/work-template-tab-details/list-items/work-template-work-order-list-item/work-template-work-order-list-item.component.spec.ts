import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplateWorkOrderListItemComponent } from './work-template-work-order-list-item.component';

describe('WorkTemplateWorkOrderListItemComponent', () => {
  let component: WorkTemplateWorkOrderListItemComponent;
  let fixture: ComponentFixture<WorkTemplateWorkOrderListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplateWorkOrderListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplateWorkOrderListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
