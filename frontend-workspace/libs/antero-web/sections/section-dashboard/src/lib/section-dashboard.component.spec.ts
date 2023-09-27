import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDashboardComponent } from './section-dashboard.component';

describe('SectionDashboardComponent', () => {
  let component: SectionDashboardComponent;
  let fixture: ComponentFixture<SectionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
