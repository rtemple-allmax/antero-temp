import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWorkMiscPanelComponent } from './current-work-misc-panel.component';

describe('CurrentWorkMiscPanelComponent', () => {
  let component: CurrentWorkMiscPanelComponent;
  let fixture: ComponentFixture<CurrentWorkMiscPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWorkMiscPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentWorkMiscPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
