import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorDropdownComponent } from './text-editor-dropdown.component';

describe('TextEditorDropdownComponent', () => {
  let component: TextEditorDropdownComponent;
  let fixture: ComponentFixture<TextEditorDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextEditorDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextEditorDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
