import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialTextComponent } from './tutorial-text.component';

describe('TutorialTextComponent', () => {
  let component: TutorialTextComponent;
  let fixture: ComponentFixture<TutorialTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorialTextComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TutorialTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
