import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplateTabDetailsComponent } from './work-template-tab-details.component';

describe('WorkTemplateTabDetailsComponent', () => {
  let component: WorkTemplateTabDetailsComponent;
  let fixture: ComponentFixture<WorkTemplateTabDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplateTabDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplateTabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
