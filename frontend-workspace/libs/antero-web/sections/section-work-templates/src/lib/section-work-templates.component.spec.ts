import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWorkTemplatesComponent } from './section-work-templates.component';

describe('SectionWorkTemplatesComponent', () => {
  let component: SectionWorkTemplatesComponent;
  let fixture: ComponentFixture<SectionWorkTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionWorkTemplatesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionWorkTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
