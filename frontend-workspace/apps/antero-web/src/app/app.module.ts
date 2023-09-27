import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { interceptors } from '@allmax-angular/antero-web/data-access/interceptors';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { CollapsibleWindowModule } from '@allmax-angular/shared/ui/collapsible-window';
import { ModalWindowModule } from '@allmax-angular/shared/ui/modal-window';
import { UserSecurityModule } from '@allmax-angular/antero-web/tools/user-security';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminModule } from '@allmax-angular/antero-web/tools/admin';
import { AnteroAppFrameModule } from '@allmax-angular/antero-web/ui/antero-app-frame';
import { EnterReadingsModule } from '@allmax-angular/antero-web/tools/enter-readings';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ErrorWindowModule } from '@allmax-angular/shared/ui/error-window';
import { RoutePaths } from '@allmax-angular/antero-web/types';
import { CreateWorkOrderModule } from '@allmax-angular/antero-web/tools/create-work-order';
import { WorkOrderViewerModule } from '@allmax-angular/antero-web/tools/work-order-viewer';
import { TaskListModule } from '@allmax-angular/antero-web/tools/task-list';
import { PermissionsGuard } from '@allmax-angular/antero-web/guards/permissions-guard';
import { NotificationsModule } from '@allmax-angular/shared/ui/notifications';
import { UserProfileModule } from '@allmax-angular/antero-web/tools/user-profile';
import { ProcedureViewerModule } from '@allmax-angular/antero-web/tools/procedure-viewer';
import { WorkOrderModalsModule } from '@allmax-angular/antero-web/ui/work-order-modals';
import { ChecklistModule } from '@allmax-angular/antero-web/ui/checklist';
import { EquipmentModalsModule } from '@allmax-angular/antero-web/ui/equipment-modals';
import { ImageGalleryModule } from '@allmax-angular/shared/ui/image-gallery';
import { ToolsModule } from '@allmax-angular/antero-web/ui/tools';
import { WorkHistoryViewerModule } from '@allmax-angular/antero-web/tools/work-history-viewer';
import { PartModalsModule } from '@allmax-angular/antero-web/ui/part-modals';
import { PartViewerModule } from '@allmax-angular/antero-web/ui/viewers/part-viewer';
import { TaskModalsModule } from '@allmax-angular/antero-web/ui/task-modals';
import { FeatureWorkViewerModule } from '@allmax-angular/antero-web/features/feature-work-viewer';



const routes: Routes = [
  {
    path: RoutePaths.LOGIN,
    loadChildren: () => import('./sections/section-login.module').then(m => m.SectionLoginModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.REGISTER,
    loadChildren: () => import('./sections/section-register.module').then(m => m.SectionRegisterModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.PASSWORD,
    loadChildren: () => import('./sections/section-reset-password.module').then(m => m.SectionResetPasswordModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.SELECT_DATABASE,
    loadChildren: () => import('./sections/section-select-database.module').then(m => m.SectionSelectDatabaseModule),
    runGuardsAndResolvers: 'always'
  },
  {
    path: '',
    loadChildren: () => import('./sections/section-dashboard.module').then(m => m.SectionDashboardModule),
    canActivate: [ PermissionsGuard ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.ADMIN,
    loadChildren: () => import('./sections/section-admin.module').then(m => m.SectionAdminModule),
    canActivate: [ PermissionsGuard ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.DASHBOARD,
    loadChildren: () => import('./sections/section-dashboard.module').then(m => m.SectionDashboardModule),
    canActivate: [ PermissionsGuard ],
    runGuardsAndResolvers: 'always'
  },
  // {
  //   path: RoutePaths.EQUIPMENT,
  //   loadChildren: () => import('./sections/section-equipment.module').then(m => m.SectionEquipmentModule),
  //   canActivate: [ PermissionsGuard ],
  //   runGuardsAndResolvers: 'always'
  // },
  {
    path: RoutePaths.EQUIPMENT,
    loadChildren: () => import('./features/feature-asset-management.module').then(m => m.FeatureAssetManagementModule),
    canActivate: [ PermissionsGuard ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.MAPPING,
    loadChildren: () => import('./sections/section-mapping.module').then(m => m.SectionMappingModule),
    canActivate: [ PermissionsGuard ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.CURRENT_WORK,
    loadChildren: () => import('./sections/section-current-work.module').then(m => m.SectionCurrentWorkModule),
    canActivate: [ PermissionsGuard ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.WORK_SETUP,
    loadChildren: () => import('./sections/section-work-templates.module').then(m => m.SectionWorkTemplatesModule),
    canActivate: [ PermissionsGuard ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.WORK_HISTORY,
    loadChildren: () => import('./sections/section-work-order-history.module').then(m => m.SectionWorkOrderHistoryModule),
    canActivate: [ PermissionsGuard ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.PARTS,
    loadChildren: () => import('./sections/section-parts.module').then(m => m.SectionPartsModule),
    canActivate: [ PermissionsGuard ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.ORDERING,
    loadChildren: () => import('./sections/section-ordering.module').then(m => m.SectionOrderingModule),
    canActivate: [ PermissionsGuard ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.SUPPLIERS,
    loadChildren: () => import('./sections/section-suppliers.module').then(m => m.SectionSuppliersModule),
    canActivate: [ PermissionsGuard ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.WORK_REVIEW,
    loadChildren: () => import('./sections/section-work-review.module').then(m => m.SectionWorkReviewModule),
    canActivate: [ PermissionsGuard ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.WORK_REQUESTS,
    loadChildren: () => import('./sections/section-work-requests.module').then(m => m.SectionWorkRequestsModule),
    canActivate: [ PermissionsGuard ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.TRANSACTIONS,
    loadChildren: () => import('./sections/section-transactions.module').then(m => m.SectionTransactionsModule),
    canActivate: [ PermissionsGuard ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.TESTING,
    loadChildren: () => import('./sections/section-testing.module').then(m => m.SectionTestingModule),
    canActivate: [ PermissionsGuard ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: RoutePaths.WORK,
    loadChildren: () => import('./features/feature-work-management.module').then(m => m.FeatureWorkManagementModule),
    canActivate: [ PermissionsGuard ],
    runGuardsAndResolvers: 'always'
  },
];

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    AdminModule,
    BrowserAnimationsModule,
    BrowserModule,
    DxDataGridModule,
    HttpClientModule,
    CollapsibleWindowModule,
    ModalWindowModule,
    RouterModule.forRoot(routes),
    UserSecurityModule,
    FontAwesomeModule,
    AnteroAppFrameModule,
    EnterReadingsModule,
    ErrorWindowModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    CreateWorkOrderModule,
    WorkOrderViewerModule,
    WorkHistoryViewerModule,
    TaskListModule,
    NotificationsModule,
    UserProfileModule,
    ProcedureViewerModule,
    WorkOrderModalsModule,
    ChecklistModule,
    CreateWorkOrderModule,
    EquipmentModalsModule,
    ImageGalleryModule,
    ToolsModule,
    PartModalsModule,
    PartViewerModule,
    TaskModalsModule,
    FeatureWorkViewerModule
  ],
  providers: [ interceptors ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}

