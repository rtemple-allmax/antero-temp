import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplateListItemComponent } from './work-template-list-item.component';

describe('WorkTemplateListItemComponent', () => {
  let component: WorkTemplateListItemComponent;
  let fixture: ComponentFixture<WorkTemplateListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplateListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplateListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
