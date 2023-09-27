import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { ErrorService } from '@allmax-angular/antero-web/services/error';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { EquipmentSectionStore } from '@allmax-angular/antero-web/state-management/equipment-section-store';
import { PartStoreService } from '@allmax-angular/antero-web/state-management/part-store';
import { DataStores, ImageData, LocalStorageKeys, Modals, UIStorePropNames, uiStoreSchema } from '@allmax-angular/antero-web/types';
import { Themes, ThemingService } from '@allmax-angular/shared/features/theming';
import { DataSourceConfiguratorService, FetchService, NavigationService } from '@allmax-angular/shared/services';
import { Nullable } from '@allmax-angular/shared/types';
import { ErrorWindowComponent } from '@allmax-angular/shared/ui/error-window';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from '../environments/environment';
import themes from 'devextreme/ui/themes';
import { FormsStore } from '@allmax-angular/antero-web/state-management/forms-store';
import { SuppliersSectionStore } from '@allmax-angular/antero-web/state-management/suppliers-section-store';
import { StateManagementService } from '@allmax-angular/shared/features/state-management';
import { equipmentStoreSchema, equipmentUIPersistenceSchema } from '@allmax-angular/antero-web/features/feature-asset-management';
import { workStoreSchema } from '@allmax-angular/antero-web/features/feature-work-management';
import { workViewerStoreSchema } from '@allmax-angular/antero-web/features/feature-work-viewer';
import { WorkViewerComponent } from '@allmax-angular/antero-web/features/feature-work-viewer';
import { ViewersService } from '@allmax-angular/antero-web/services/viewers-service';
import { MasterDetailViewTypes } from '@allmax-angular/shared/ui/master-detail';


@Component({
  selector: 'allmax-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(ErrorWindowComponent) public errorWindow: Nullable<ErrorWindowComponent>;
  @ViewChild(WorkViewerComponent) public workViewer: Nullable<WorkViewerComponent>;
  
  private debug = true;

  private subs: Subscription[] = [];

  public openModal: Modals = Modals.NONE;
  public modals: typeof Modals = Modals;

  public thumbs: ImageData[] = [];
  public primaryImageID = 0;
  public selectedImageID = 0;

  public demensions: [number, number] = [0, 0];

  private datasources = inject(DataSourceConfiguratorService);
  private errors = inject(ErrorService);
  private nav = inject(NavigationService);
  private theming = inject(ThemingService);
  private state = inject(StateManagementService);
  private viewers = inject(ViewersService);
  
  constructor(
    public antero: AnteroService,
    private equipmentStore: EquipmentSectionStore,
    private fetch: FetchService,
    private appStore: AnteroStoreService,
    private supplierStore: SuppliersSectionStore,
    private partStore: PartStoreService,
    private formsStore: FormsStore
  ) { }

  public async ngOnInit(): Promise<void> {
    this.demensions = [ window.innerWidth, window.innerHeight ];
    this.theming.initialize(Themes.ANTERO);
    this.antero.setDeviceType();
    this.nav.initialize();
    this.fetch.initialize(environment.apiBaseUrl);
    this.datasources.initialize(environment.apiBaseUrl);
    
    this.appStore.intialize(this.debug);
    this.partStore.initialize(this.debug);
    this.formsStore.initialize(this.debug);
    this.supplierStore.initialize(this.debug);
  
    this.state.createStore(DataStores.EQUIPMENT, equipmentStoreSchema, this.debug, 'blue', 'white');
    this.state.createStore(DataStores.WORK, workStoreSchema, this.debug, 'white', 'black')
    this.state.createStore(DataStores.VIEWER_WORK, workViewerStoreSchema, this.debug, 'red', 'white')
    const ui = this.state.createStore(DataStores.UI, uiStoreSchema, this.debug, '#ED7D3A');
    const eqUI = this.state.createStore(DataStores.EQUIPMENT_UI, equipmentUIPersistenceSchema, this.debug, 'brown', 'white');

    ui?.linkToStorage(window.localStorage);
    eqUI?.linkToStorage(window.localStorage);
    
    this.subs.push(this.appStore.modal$.subscribe(x => {
      this.openModal = x;
      if (this.openModal === Modals.NONE) {
        this.formsStore.equipmentAddEditForm = null;
      }
    }));
    this.subs.push(this.appStore.thumbs$.subscribe(x => this.thumbs = x));
    this.subs.push(this.appStore.primaryImageID$.subscribe(x => this.primaryImageID = x));
    this.subs.push(this.appStore.selectedImageID$.subscribe(x => this.selectedImageID = x));
    this.subs.push(this.appStore.colorMode$.subscribe(x => {
      if (x > 0) {
        this.theming.activateTheme(Themes.ANTERO_DARK);
        themes.current(this.theming.dxDarkTheme);
      } else {
        this.theming.activateTheme(Themes.ANTERO);
        themes.current(this.theming.dxLightTheme);
      }
    }))

    const token = localStorage.getItem(LocalStorageKeys.TOKEN);
    if (token) { this.antero.heartbeatInterval(); }

    this.updateDemensions();

    window.addEventListener('resize', () => this.updateDemensions());
    window.addEventListener('keydown', (e) => this.keyDownHandler(e));
  }

  public ngAfterViewInit(): void {
    this.viewers.registerWorkViewer(this.workViewer);
    this.appStore.errorWindow = this.errorWindow;
    this.errors.initialize();
  }
  
  public ngOnDestroy(): void {
    this.appStore.finalize();
    this.nav.finalize();
    this.errors.finalize();
    this.equipmentStore.finalize();
    this.partStore.finalize();
    this.supplierStore.finalize();
  }

  private keyDownHandler(e: KeyboardEvent): void {
    const { key, altKey, ctrlKey } = e;
    if (altKey && ctrlKey) {
      if (key === 't') {
        this.antero.overrideDeviceType('tablet')
      }
      if (key === 'm') {
        this.antero.overrideDeviceType('mobile')
      }
      if (key === 'd') {
        this.antero.overrideDeviceType('desktop')
      }
    }
  }

  public updateDemensions(): void {
    const vh1 = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh-1', `${ vh1 }px`);
  }

  public closeModals(): void {
    this.antero.closeModal();
  }
}