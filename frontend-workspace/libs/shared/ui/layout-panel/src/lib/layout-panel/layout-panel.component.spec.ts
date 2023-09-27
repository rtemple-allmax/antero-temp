import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPanelComponent } from './layout-panel.component';

describe('LayoutPanelComponent', () => {
  let component: LayoutPanelComponent;
  let fixture: ComponentFixture<LayoutPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
