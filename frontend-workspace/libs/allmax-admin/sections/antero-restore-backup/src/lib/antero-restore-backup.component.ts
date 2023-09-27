import { Nullable, ObservableBinding } from '@allmax-angular/shared/types';
import { generateQueryStringFromObject, isNullOrEmpty } from '@allmax-angular/shared/utils';
import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http'
import { FetchService } from '@allmax-angular/shared/services';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'amx-antero-restore-backup',
  templateUrl: './antero-restore-backup.component.html',
  styles: [`
    .file-picker {
      pointer-events: all;
    }

    .file-picker input[type=file] {
      visibility: hidden;
      position: absolute;
    }

    .file-picker.disabled {
      pointer-events: none;
      position: relative;
      cursor: initial;
      opacity: 0;
    }

    .file-picker.disabled::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(196, 196, 196, 0.6);
    }
  `],
})
export class AnteroRestoreBackupComponent {
  public fileName = 'Choose a file';
  
  public nameBinding = new ObservableBinding<string>();
  public acctNumberBinding = new ObservableBinding<number>();

  private data: Nullable<FormData>;

  public message: Nullable<string>
  public isError = false;

  public get ready(): boolean {
    return !!this.data && !isNullOrEmpty(this.nameBinding.value) && !isNullOrEmpty(this.acctNumberBinding.value); 
  }

  constructor(
    private fetch: FetchService,
    private spinner: NgxSpinnerService
  ) { }

  public filesSelectedHandler(files: File[]): void {
    const file = files[0];
    if (!!file && 'name' in file) {
      this.data = new FormData();
      this.data.append(file.name, file, file.name);
      this.fileName = file.name;
    }
  }

  public async upload(): Promise<void> {
    this.spinner.show();
    if (!this.ready) { return; }
    
    const path = '/database/restorebackup';
    const query = generateQueryStringFromObject({
      accountNumber: this.acctNumberBinding.value,
      displayName: this.nameBinding.value
    })

    let res: Nullable<HttpResponse<any>>;

    this.fetch.preUpload();

    try {
      res = await this.fetch.post<FormData, any>(`${ path }${ query }`, this.data as FormData);
    } catch (err) {
      this.isError = true;
      this.message = 'Restoration Failed';
      console.error(err);
    } finally {
      this.fetch.postUpload();
    }

    if (res) {
      this.isError = false;
      this.message = 'Restoration Succeeded'
    }
    this.spinner.hide();
  }
}
