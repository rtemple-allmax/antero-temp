import { UserController } from '@allmax-angular/antero-web/data-access/user-controller';
import { MaintenanceGroup, Role, User, UserCertificate } from '@allmax-angular/antero-web/entities';
import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { UserPreferences } from '@allmax-angular/antero-web/types';
import { securityLevelsToBooleanMap, securityLevelsToLabelsMap } from '@allmax-angular/antero-web/utils';
import { Nullable, ObservableBinding, SecurityLevels } from '@allmax-angular/shared/types';
import { miscIcons, toolbarIcons } from '@allmax-angular/shared/ui/icons';
import { ModalWindowComponent } from '@allmax-angular/shared/ui/modal-window';
import { NotificationsService } from '@allmax-angular/shared/ui/notifications';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Themes, ThemingService } from '@allmax-angular/shared/features/theming';
import { Component, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersistenceService, PersistentDataKeys } from '@allmax-angular/antero-web/services/persistence';

@Component({
  selector: 'ant-user-profile',
  templateUrl: './user-profile.component.html',
  styles: [`
    a {
      padding: 0;
      background-color: transparent;
      border: none;
      outline: 0;
      color: var(--selected-color);
      text-decoration: none;
    }

    a:hover {
      color: var(--highlight-color);
      text-decoration: underline;
    }

    .username {

    }

    .link:hover {
      cursor: pointer;
      color: var(--highlight-color);
      text-decoration: underline;
    }
  `]
})
export class UserProfileComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('modal') public modal : Nullable<ModalWindowComponent>;
  @ViewChild('editModal') public editModal : Nullable<ModalWindowComponent>;

  public icons = { ...toolbarIcons, ...miscIcons };
  public user: Nullable<User>;
  public certificates: UserCertificate[] = [];
  public groups: MaintenanceGroup[] = [];
  public role: Nullable<Role>;
  public profileEditable = false;
  
  private prefs: Nullable<UserPreferences>;

  //My Profile Bindings
  public nameBinding = new ObservableBinding<string>();
  public titleBinding = new ObservableBinding<string>();
  public primaryPhoneBinding = new ObservableBinding<string>();
  public secondaryPhoneBinding = new ObservableBinding<string>();
  public emailBinding = new ObservableBinding<string>();

  //  User Preferences Bindings
  public woReviewBinding = new ObservableBinding<boolean>(false);
  public woHistoryBinding = new ObservableBinding<boolean>(false);
  public pHistoryBinding = new ObservableBinding<boolean>(false);
  public poBinding = new ObservableBinding<boolean>(false);
  public darkModeBinding = new ObservableBinding<boolean>(false);
  public resetTutorialsBinding = new ObservableBinding<boolean>(false);
  
  private subs: Subscription[] = [];

  public get emailHref(): string {
    if (this.user?.username) {
      return `mailto:${ this.user.username }`;
    }
    return '';
  }

  constructor(
    private antero: AnteroService,
    private appStore: AnteroStoreService,
    private ctrl: UserController,
    private store: AnteroStoreService,
    private notifications: NotificationsService,
    private themes: ThemingService,
    private persistence: PersistenceService
  ) {}

  public async ngOnInit(): Promise<void> {
    const localData = this.persistence.get();
    if (localData) {
      this.darkModeBinding.set(localData.darkMode > 0 ? true : false);
      if (
        localData.equipmentCustomDetailsTutorial +
        localData.equipmentPrimaryDetailsTutorial +
        localData.equipmentPurchasingDetailsTutorial < 3) {
          // some tutorials have been dismissed
          this.resetTutorialsBinding.set(false);
        }

    }
    this.store.userPreferences = await this.ctrl.getUserPreferences();
    this.subs.push(this.store.userPreferences$.pipe().subscribe(x => {
      this.prefs = x;
      if (this.prefs) {
        this.woReviewBinding.set(this.prefs.showWorkOrderReviewPrompt);
        this.woHistoryBinding.set(this.prefs.showWorkOrderHistoryPrompt);
        this.pHistoryBinding.set(this.prefs.showProcedureHistoryPrompt);
        this.poBinding.set(this.prefs.showCompleteOrderPrompt);
      }
    }));
    this.subs.push(this.store.user$.subscribe(x => this.user = x));
    this.subs.push(this.store.permissions$.subscribe(x => {
      if (x?.roles && x.roles.length > 0) {
        this.role = x.roles[0];
      }
    }));
    this.subs.push(this.darkModeBinding.value$.subscribe(x => {
      if (x) {
        this.persistence.set(PersistentDataKeys.DARK_MODE, 1);
        this.appStore.colorMode = 1;
      } else {
        this.themes.activateTheme(Themes.ANTERO);
        this.persistence.set(PersistentDataKeys.DARK_MODE, 0);
        this.appStore.colorMode = 0;
      }
    }))
    this.subs.push(this.resetTutorialsBinding.value$.subscribe(x => {
      if (x) {
        this.resetTutorials();
      }
    }))
  }

  public ngAfterViewInit(): void {
    this.modal?.open()
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public closedHandler(): void {
    this.antero.closeModal();
  }

  public async updatePreferences(): Promise<void> {
    if (this.prefs) {
      const model: UserPreferences = { ...this.prefs };
      if (model) {
        model.showCompleteOrderPrompt = this.poBinding.value as boolean;
        model.showProcedureHistoryPrompt = this.pHistoryBinding.value as boolean;
        model.showWorkOrderHistoryPrompt = this.woHistoryBinding.value as boolean;
        model.showWorkOrderReviewPrompt = this.woReviewBinding.value as boolean;

        const result = await this.ctrl.updatePreferences(model);
        
        if (result) {
          this.store.userPreferences = result;
          this.notifications.notify('User Preferences Successfully Updated');
        }
      }
    }
  }

  public getSecurityLevelLabel(secLvl: Nullable<SecurityLevels>): string {
    if (!secLvl) {
      return 'None Set';
    }
    return securityLevelsToLabelsMap.get(secLvl) as string;
  }

  public getPriviledgeLabel(secLvl: Nullable<SecurityLevels>): string {
    if (!secLvl) {
      return 'Denied';
    }
    const state = securityLevelsToBooleanMap.get(secLvl);
    return state ? 'Allowed': 'Denied'
  }

  public editProfile(): void {
    this.profileEditable = true;
    if (this.user) {
      this.nameBinding.set(this.user.fullName);
      this.titleBinding.set(this.user.description);
      this.primaryPhoneBinding.set(this.user.primaryPhone);
      this.secondaryPhoneBinding.set(this.user.contact2);
      this.emailBinding.set(this.user.username);
    }
    this.editModal?.open();
  }

  editClosedHandler(): void {
    this.profileEditable = false;
  }

  public resetTutorials(): void {
    this.persistence.set(PersistentDataKeys.EQUIPMENT_CUSTOM_DETAILS_TUTORIAL, 1);
    this.persistence.set(PersistentDataKeys.EQUIPMENT_PURCHASING_DETAILS_TUTORIAL, 1);
    this.persistence.set(PersistentDataKeys.EQUIPMENT_PRIMARY_DETAILS_TUTORIAL, 1);
  }
}
