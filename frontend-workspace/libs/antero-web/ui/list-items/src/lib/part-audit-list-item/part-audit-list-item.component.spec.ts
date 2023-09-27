import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAuditListItemComponent } from './part-audit-list-item.component';

describe('PartAuditListItemComponent', () => {
  let component: PartAuditListItemComponent;
  let fixture: ComponentFixture<PartAuditListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartAuditListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartAuditListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
