import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterReadingsToolComponent } from './enter-readings-tool.component';

describe('EnterReadingsToolComponent', () => {
  let component: EnterReadingsToolComponent;
  let fixture: ComponentFixture<EnterReadingsToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterReadingsToolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EnterReadingsToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
