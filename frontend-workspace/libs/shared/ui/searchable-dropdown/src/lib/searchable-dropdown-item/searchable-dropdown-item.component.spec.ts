import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchableDropdownItemComponent } from './searchable-dropdown-item.component';

describe('SearchableDropdownItemComponent', () => {
  let component: SearchableDropdownItemComponent;
  let fixture: ComponentFixture<SearchableDropdownItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchableDropdownItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchableDropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
