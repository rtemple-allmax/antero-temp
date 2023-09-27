import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplateLaborListItemComponent } from './work-template-labor-list-item.component';

describe('WorkTemplateLaborListItemComponent', () => {
  let component: WorkTemplateLaborListItemComponent;
  let fixture: ComponentFixture<WorkTemplateLaborListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplateLaborListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplateLaborListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
