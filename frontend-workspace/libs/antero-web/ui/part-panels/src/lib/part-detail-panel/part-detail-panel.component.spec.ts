import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartDetailPanelComponent } from './part-detail-panel.component';

describe('PartDetailPanelComponent', () => {
  let component: PartDetailPanelComponent;
  let fixture: ComponentFixture<PartDetailPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartDetailPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartDetailPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
