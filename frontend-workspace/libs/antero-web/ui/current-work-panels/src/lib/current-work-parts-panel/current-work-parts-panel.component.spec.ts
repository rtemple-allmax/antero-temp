import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWorkPartsPanelComponent } from './current-work-parts-panel.component';

describe('CurrentWorkPartsPanelComponent', () => {
  let component: CurrentWorkPartsPanelComponent;
  let fixture: ComponentFixture<CurrentWorkPartsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWorkPartsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentWorkPartsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
