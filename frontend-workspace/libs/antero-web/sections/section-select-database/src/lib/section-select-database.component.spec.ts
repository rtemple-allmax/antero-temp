import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSelectDatabaseComponent } from './section-select-database.component';

describe('SectionSelectDatabaseComponent', () => {
  let component: SectionSelectDatabaseComponent;
  let fixture: ComponentFixture<SectionSelectDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionSelectDatabaseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionSelectDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
