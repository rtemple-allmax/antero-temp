import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableDropdownComponent } from './data-table-dropdown.component';

describe('DataTableDropdownComponent', () => {
  let component: DataTableDropdownComponent;
  let fixture: ComponentFixture<DataTableDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataTableDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataTableDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
