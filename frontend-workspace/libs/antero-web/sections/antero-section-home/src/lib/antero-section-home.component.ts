import { AnteroService } from '@allmax-angular/antero-web/services/antero-service';
import { Modals, RoutePaths } from '@allmax-angular/antero-web/types';
import { NavigationService } from '@allmax-angular/shared/services';
import { Component } from '@angular/core';

@Component({
  selector: 'ant-section-home',
  templateUrl: './antero-section-home.component.html',
  styleUrls: ['./antero-section-home.component.scss'],
})
export class AnteroSectionHomeComponent {
  public paths: typeof RoutePaths = RoutePaths;
  public modals: typeof Modals = Modals;
  
  constructor(
    private antero: AnteroService,
    private nav: NavigationService
  ) { }
  
  public navigate(segments: string[]): void {
    this.nav.navigate(segments);
  }

  public openModal(modal: Modals): void {
    this.antero.openModal(modal);
  }
}
