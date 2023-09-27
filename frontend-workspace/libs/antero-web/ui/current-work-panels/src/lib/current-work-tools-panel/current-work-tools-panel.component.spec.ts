import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWorkToolsPanelComponent } from './current-work-tools-panel.component';

describe('CurrentWorkToolsPanelComponent', () => {
  let component: CurrentWorkToolsPanelComponent;
  let fixture: ComponentFixture<CurrentWorkToolsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWorkToolsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentWorkToolsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
