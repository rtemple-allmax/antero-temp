import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPartsComponent } from './section-parts.component';

describe('SectionPartsComponent', () => {
  let component: SectionPartsComponent;
  let fixture: ComponentFixture<SectionPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionPartsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
