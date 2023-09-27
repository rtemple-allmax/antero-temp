import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWorkHistoryComponent } from './section-work-history.component';

describe('SectionWorkHistoryComponent', () => {
  let component: SectionWorkHistoryComponent;
  let fixture: ComponentFixture<SectionWorkHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionWorkHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionWorkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
