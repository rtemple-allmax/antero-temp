import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPanelContainerComponent } from './layout-panel-container.component';

describe('LayoutPanelContainerComponent', () => {
  let component: LayoutPanelContainerComponent;
  let fixture: ComponentFixture<LayoutPanelContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutPanelContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutPanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
