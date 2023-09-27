import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentListItemComponent } from './instrument-list-item.component';

describe('InstrumentListItemComponent', () => {
  let component: InstrumentListItemComponent;
  let fixture: ComponentFixture<InstrumentListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstrumentListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InstrumentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
