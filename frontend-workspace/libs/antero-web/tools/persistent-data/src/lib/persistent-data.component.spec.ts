import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistentDataComponent } from './persistent-data.component';

describe('PersistentDataComponent', () => {
  let component: PersistentDataComponent;
  let fixture: ComponentFixture<PersistentDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersistentDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersistentDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
