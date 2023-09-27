import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteringPanelComponent } from './filtering-panel.component';

describe('FilteringPanelComponent', () => {
  let component: FilteringPanelComponent;
  let fixture: ComponentFixture<FilteringPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilteringPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilteringPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
