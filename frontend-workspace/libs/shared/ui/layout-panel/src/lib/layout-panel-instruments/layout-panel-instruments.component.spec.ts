import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPanelInstrumentsComponent } from './layout-panel-instruments.component';

describe('LayoutPanelInstrumentsComponent', () => {
  let component: LayoutPanelInstrumentsComponent;
  let fixture: ComponentFixture<LayoutPanelInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutPanelInstrumentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutPanelInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
