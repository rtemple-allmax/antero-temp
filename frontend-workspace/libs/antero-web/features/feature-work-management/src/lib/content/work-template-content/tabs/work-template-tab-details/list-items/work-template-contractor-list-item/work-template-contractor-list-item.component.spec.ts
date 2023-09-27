import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplateContractorListItemComponent } from './work-template-contractor-list-item.component';

describe('WorkTemplateContractorListItemComponent', () => {
  let component: WorkTemplateContractorListItemComponent;
  let fixture: ComponentFixture<WorkTemplateContractorListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplateContractorListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplateContractorListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
