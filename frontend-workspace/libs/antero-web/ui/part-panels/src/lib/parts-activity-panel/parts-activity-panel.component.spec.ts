import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsActivityPanelComponent } from './parts-activity-panel.component';

describe('PartsActivityPanelComponent', () => {
  let component: PartsActivityPanelComponent;
  let fixture: ComponentFixture<PartsActivityPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartsActivityPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartsActivityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
