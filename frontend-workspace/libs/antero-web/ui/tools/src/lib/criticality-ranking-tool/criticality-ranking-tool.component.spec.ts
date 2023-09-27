import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalityRankingToolComponent } from './criticality-ranking-tool.component';

describe('CriticalityRankingToolComponent', () => {
  let component: CriticalityRankingToolComponent;
  let fixture: ComponentFixture<CriticalityRankingToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriticalityRankingToolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CriticalityRankingToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
