import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMyWorkComponent } from './section-my-work.component';

describe('SectionMyWorkComponent', () => {
  let component: SectionMyWorkComponent;
  let fixture: ComponentFixture<SectionMyWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionMyWorkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionMyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
