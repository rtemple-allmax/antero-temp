import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWorkMapPanelComponent } from './current-work-map-panel.component';

describe('CurrentWorkMapPanelComponent', () => {
  let component: CurrentWorkMapPanelComponent;
  let fixture: ComponentFixture<CurrentWorkMapPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWorkMapPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentWorkMapPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
