import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWorkReviewComponent } from './section-work-review.component';

describe('SectionWorkReviewComponent', () => {
  let component: SectionWorkReviewComponent;
  let fixture: ComponentFixture<SectionWorkReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionWorkReviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionWorkReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
