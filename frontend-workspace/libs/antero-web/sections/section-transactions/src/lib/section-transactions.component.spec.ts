import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTransactionsComponent } from './section-transactions.component';

describe('SectionTransactionsComponent', () => {
  let component: SectionTransactionsComponent;
  let fixture: ComponentFixture<SectionTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionTransactionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
