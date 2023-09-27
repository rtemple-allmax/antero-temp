import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistViewerComponent } from './checklist-viewer.component';

describe('ChecklistViewerComponent', () => {
  let component: ChecklistViewerComponent;
  let fixture: ComponentFixture<ChecklistViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChecklistViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChecklistViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
