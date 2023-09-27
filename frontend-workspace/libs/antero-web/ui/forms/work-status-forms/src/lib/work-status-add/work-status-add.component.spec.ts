import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkStatusAddComponent } from './work-status-add.component';

describe('WorkStatusAddComponent', () => {
  let component: WorkStatusAddComponent;
  let fixture: ComponentFixture<WorkStatusAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkStatusAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkStatusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
