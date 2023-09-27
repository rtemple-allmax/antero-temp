import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCurrentWorkComponent } from './section-current-work.component';

describe('SectionCurrentWorkComponent', () => {
  let component: SectionCurrentWorkComponent;
  let fixture: ComponentFixture<SectionCurrentWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionCurrentWorkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionCurrentWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
