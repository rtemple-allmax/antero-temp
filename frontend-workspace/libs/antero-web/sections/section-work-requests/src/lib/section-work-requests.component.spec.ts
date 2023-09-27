import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWorkRequestsComponent } from './section-work-requests.component';

describe('SectionWorkRequestsComponent', () => {
  let component: SectionWorkRequestsComponent;
  let fixture: ComponentFixture<SectionWorkRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionWorkRequestsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionWorkRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
