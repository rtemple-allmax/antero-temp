import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReadingComponent } from './delete-reading.component';

describe('DeleteReadingComponent', () => {
  let component: DeleteReadingComponent;
  let fixture: ComponentFixture<DeleteReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteReadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
