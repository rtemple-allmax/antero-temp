import { AnteroStoreService } from '@allmax-angular/antero-web/state-management/antero-store';
import { DataStores, RoutePaths, UIStorePropNames } from '@allmax-angular/antero-web/types';
import { NavigationService } from '@allmax-angular/shared/services';
import { Nullable } from '@allmax-angular/shared/types';
import { miscIcons, navIcons } from '@allmax-angular/shared/ui/icons';
import { unsubscribe } from '@allmax-angular/shared/utils';
import { Component, EventEmitter, OnDestroy, OnInit, Output, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarItem } from './sidebar-button/sidebar-button.component';
import { StateManagementService } from '@allmax-angular/shared/features/state-management';

@Component({
  selector: 'ant-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`
    .sidebar {
      width: 200px;
      height: calc(100vh - 50px);
      transition: all .3s ease-in-out;
      background-color: var(--base-bg-color);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      justify-content: space-between
    }
    .sidebar.collapsed {
      width: 58px;
    }

    .sidebar .top {
      flex: 1 1 100%;
    }

    .sidebar .bottom {
      flex: 1 1 auto; 
    }

    .sidebar .bottom .tools-container {
      height: 0;
      overflow: hidden;
    }

    .sidebar .bottom .tools-container.show-tools {
      height: auto;
    }
  `],
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Output() public collapseStateChange = new EventEmitter<boolean>();
  private subs: Subscription[] = [];

  public currentLocation: Nullable<string>;

  public paths: typeof RoutePaths = RoutePaths;

  public collapsed = false;
  public icons = {  ...navIcons, ...miscIcons }
  
  public items: SidebarItem[] = [
    {
      label: 'Dashboard',
      icon: this.icons.homeIcon,
      handler: () => this.nav.navigate([ RoutePaths.DASHBOARD ])
    },
    {
      label: 'Work Management',
      icon: this.icons.currentWorkIcon,
      handler: () => this.nav.navigate([ RoutePaths.WORK ])
    },
    {
      label: 'Asset Management',
      icon: this.icons.equipmentIcon,
      handler: () => this.nav.navigate([ RoutePaths.EQUIPMENT ]) 
    },
    {
      label: 'Inventory Management',
      icon: this.icons.partsIcon,
      handler: () => this.nav.navigate([ RoutePaths.PARTS ]) 
    },
    {
      label: 'Reporting',
      icon: this.icons.reportIcon,
      handler: () => console.log('reporting')
    },
    {
      label: 'Admin',
      icon: this.icons.adminIcon,
      handler: () => this.nav.navigate([ RoutePaths.ADMIN ]) 
    },
  ];

  private state = inject(StateManagementService);

  private uiStore = this.state.getStore(DataStores.UI);

  constructor(
    private appStore: AnteroStoreService,
    private nav: NavigationService,
  ) { }

  public ngOnInit(): void {
    this.subs.push(this.appStore.location$.subscribe(x => this.currentLocation = x));
    const sub = this.uiStore?.observe(UIStorePropNames.SIDEBAR_COLLAPSED)?.subscribe(x => this.collapsed = x);
    if(sub) { this.subs.push(sub); }
  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }

  public toggle(): void {
    this.uiStore?.setValue(UIStorePropNames.SIDEBAR_COLLAPSED, !this.collapsed);
  }
  
  public setActive(item: SidebarItem): boolean {
    return `/${item.label.toLowerCase().split(' ').join('-')}` === this.currentLocation;
  }
}
