import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplateTabActivityComponent } from './work-template-tab-activity.component';

describe('WorkTemplateTabActivityComponent', () => {
  let component: WorkTemplateTabActivityComponent;
  let fixture: ComponentFixture<WorkTemplateTabActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplateTabActivityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplateTabActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
