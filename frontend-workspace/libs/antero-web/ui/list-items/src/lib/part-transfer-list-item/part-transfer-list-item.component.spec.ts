import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTransferListItemComponent } from './part-transfer-list-item.component';

describe('PartTransferListItemComponent', () => {
  let component: PartTransferListItemComponent;
  let fixture: ComponentFixture<PartTransferListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartTransferListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PartTransferListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
