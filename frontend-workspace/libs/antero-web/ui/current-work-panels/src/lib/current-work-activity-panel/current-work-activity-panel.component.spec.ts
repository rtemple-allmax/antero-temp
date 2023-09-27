import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWorkActivityPanelComponent } from './current-work-activity-panel.component';

describe('CurrentWorkActivityPanelComponent', () => {
  let component: CurrentWorkActivityPanelComponent;
  let fixture: ComponentFixture<CurrentWorkActivityPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWorkActivityPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentWorkActivityPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
