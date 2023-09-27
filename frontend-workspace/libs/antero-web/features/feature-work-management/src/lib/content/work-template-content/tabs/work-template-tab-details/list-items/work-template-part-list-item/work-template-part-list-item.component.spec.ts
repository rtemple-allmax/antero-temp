import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplatePartListItemComponent } from './work-template-part-list-item.component';

describe('WorkTemplatePartListItemComponent', () => {
  let component: WorkTemplatePartListItemComponent;
  let fixture: ComponentFixture<WorkTemplatePartListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplatePartListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplatePartListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
