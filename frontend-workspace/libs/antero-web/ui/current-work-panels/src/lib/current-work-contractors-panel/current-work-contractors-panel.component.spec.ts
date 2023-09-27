import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWorkContractorsPanelComponent } from './current-work-contractors-panel.component';

describe('CurrentWorkContractorsPanelComponent', () => {
  let component: CurrentWorkContractorsPanelComponent;
  let fixture: ComponentFixture<CurrentWorkContractorsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWorkContractorsPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentWorkContractorsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
