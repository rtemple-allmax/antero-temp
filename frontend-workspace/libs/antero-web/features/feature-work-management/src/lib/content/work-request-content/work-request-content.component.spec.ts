import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkRequestContentComponent } from './work-request-content.component';

describe('WorkRequestContentComponent', () => {
  let component: WorkRequestContentComponent;
  let fixture: ComponentFixture<WorkRequestContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkRequestContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkRequestContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
