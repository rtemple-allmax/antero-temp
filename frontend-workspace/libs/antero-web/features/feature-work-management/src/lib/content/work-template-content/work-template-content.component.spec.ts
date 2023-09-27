import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplateContentComponent } from './work-template-content.component';

describe('WorkTemplateContentComponent', () => {
  let component: WorkTemplateContentComponent;
  let fixture: ComponentFixture<WorkTemplateContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplateContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplateContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
