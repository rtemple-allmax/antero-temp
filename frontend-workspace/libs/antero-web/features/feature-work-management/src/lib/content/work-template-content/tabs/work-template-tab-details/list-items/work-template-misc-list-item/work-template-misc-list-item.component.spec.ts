import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTemplateMiscListItemComponent } from './work-template-misc-list-item.component';

describe('WorkTemplateMiscListItemComponent', () => {
  let component: WorkTemplateMiscListItemComponent;
  let fixture: ComponentFixture<WorkTemplateMiscListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkTemplateMiscListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkTemplateMiscListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
