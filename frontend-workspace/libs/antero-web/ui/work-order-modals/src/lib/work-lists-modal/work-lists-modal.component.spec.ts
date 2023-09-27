import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkListsModalComponent } from './work-lists-modal.component';

describe('WorkListsModalComponent', () => {
  let component: WorkListsModalComponent;
  let fixture: ComponentFixture<WorkListsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkListsModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkListsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
