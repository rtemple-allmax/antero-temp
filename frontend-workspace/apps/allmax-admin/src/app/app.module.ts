import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AnteroAccountCreationComponent } from '@allmax-angular/allmax-admin/sections/antero-account-creation';
import { AllmaxLandingComponent } from '@allmax-angular/allmax-admin/sections/allmax-landing';
import { FetchService, NavigationService } from '@allmax-angular/shared/services';
import { DxDataGridModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { AnteroRestoreBackupComponent } from '@allmax-angular/allmax-admin/sections/antero-restore-backup';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Routes = [
  { path: '', component: AllmaxLandingComponent },
  { path: 'create-antero-account', component: AnteroAccountCreationComponent },
  { path: 'antero-database-backup', component: AnteroRestoreBackupComponent }
];

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DxDataGridModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  providers: [ NavigationService, FetchService, AnteroStoreService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
