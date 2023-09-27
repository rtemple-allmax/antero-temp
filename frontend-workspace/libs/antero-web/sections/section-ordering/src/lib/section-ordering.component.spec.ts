import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOrderingComponent } from './section-ordering.component';

describe('SectionOrderingComponent', () => {
  let component: SectionOrderingComponent;
  let fixture: ComponentFixture<SectionOrderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionOrderingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
