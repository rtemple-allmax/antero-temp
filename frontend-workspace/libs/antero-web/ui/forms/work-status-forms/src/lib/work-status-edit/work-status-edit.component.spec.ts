import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStatusEditComponent } from './work-status-edit.component';

describe('WorkStatusEditComponent', () => {
  let component: WorkStatusEditComponent;
  let fixture: ComponentFixture<WorkStatusEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkStatusEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkStatusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
