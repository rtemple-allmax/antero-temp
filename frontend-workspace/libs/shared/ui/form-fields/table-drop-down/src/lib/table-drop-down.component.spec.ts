import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDropDownComponent } from './table-drop-down.component';

describe('TableDropDownComponent', () => {
  let component: TableDropDownComponent;
  let fixture: ComponentFixture<TableDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableDropDownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
