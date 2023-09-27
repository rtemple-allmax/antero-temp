import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnteroRestoreBackupComponent } from './antero-restore-backup.component';

describe('AnteroRestoreBackupComponent', () => {
  let component: AnteroRestoreBackupComponent;
  let fixture: ComponentFixture<AnteroRestoreBackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnteroRestoreBackupComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnteroRestoreBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
