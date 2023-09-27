import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchableTableDropdownComponent } from './searchable-table-dropdown.component';

describe('SearchableTableDropdownComponent', () => {
  let component: SearchableTableDropdownComponent;
  let fixture: ComponentFixture<SearchableTableDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchableTableDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchableTableDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
