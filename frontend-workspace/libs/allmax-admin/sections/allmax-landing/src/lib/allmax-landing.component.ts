import { NavigationService } from '@allmax-angular/shared/services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'amx-allmax-landing',
  templateUrl: './allmax-landing.component.html',
  styleUrls: ['./allmax-landing.component.scss'],
})
export class AllmaxLandingComponent {
  public title = 'AllMax Software Admin';
  public logo = 'assets/logoAmx.png'

  constructor(private nav: NavigationService) { }

  public signin(): void {
    this.nav.navigate(['create-antero-account']);
  }
}
