import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPanelWorkOrdersComponent } from './layout-panel-work-orders.component';

describe('LayoutPanelWorkOrdersComponent', () => {
  let component: LayoutPanelWorkOrdersComponent;
  let fixture: ComponentFixture<LayoutPanelWorkOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutPanelWorkOrdersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutPanelWorkOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
