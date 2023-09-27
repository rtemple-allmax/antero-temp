import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWorkTaskPanelComponent } from './current-work-task-panel.component';

describe('CurrentWorkTaskPanelComponent', () => {
  let component: CurrentWorkTaskPanelComponent;
  let fixture: ComponentFixture<CurrentWorkTaskPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWorkTaskPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentWorkTaskPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
