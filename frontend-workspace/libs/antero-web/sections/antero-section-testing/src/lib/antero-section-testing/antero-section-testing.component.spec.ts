import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteroSectionTestingComponent } from './antero-section-testing.component';

describe('AnteroSectionTestingComponent', () => {
  let component: AnteroSectionTestingComponent;
  let fixture: ComponentFixture<AnteroSectionTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnteroSectionTestingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnteroSectionTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
