import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneBoxComponent } from './telephone-box.component';

describe('TelephoneBoxComponent', () => {
  let component: TelephoneBoxComponent;
  let fixture: ComponentFixture<TelephoneBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelephoneBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TelephoneBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
