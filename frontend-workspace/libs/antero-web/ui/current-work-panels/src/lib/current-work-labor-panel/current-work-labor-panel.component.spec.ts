import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWorkLaborPanelComponent } from './current-work-labor-panel.component';

describe('CurrentWorkLaborPanelComponent', () => {
  let component: CurrentWorkLaborPanelComponent;
  let fixture: ComponentFixture<CurrentWorkLaborPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWorkLaborPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentWorkLaborPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
