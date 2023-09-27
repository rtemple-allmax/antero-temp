import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWorkCompletionPanelComponent } from './current-work-completion-panel.component';

describe('CurrentWorkCompletionPanelComponent', () => {
  let component: CurrentWorkCompletionPanelComponent;
  let fixture: ComponentFixture<CurrentWorkCompletionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWorkCompletionPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentWorkCompletionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
