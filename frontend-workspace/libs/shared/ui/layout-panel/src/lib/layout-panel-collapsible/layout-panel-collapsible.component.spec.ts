import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPanelCollapsibleComponent } from './layout-panel-collapsible.component';

describe('LayoutPanelCollapsibleComponent', () => {
  let component: LayoutPanelCollapsibleComponent;
  let fixture: ComponentFixture<LayoutPanelCollapsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutPanelCollapsibleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutPanelCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
