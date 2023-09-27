import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplateToolListItemComponent } from './work-template-tool-list-item.component';

describe('WorkTemplateToolListItemComponent', () => {
  let component: WorkTemplateToolListItemComponent;
  let fixture: ComponentFixture<WorkTemplateToolListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplateToolListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplateToolListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
