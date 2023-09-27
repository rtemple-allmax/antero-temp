import { FetchService } from '@allmax-angular/shared/services';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'amx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private fetch: FetchService) { }

  public ngOnInit(): void {
    this.fetch.initialize(environment.apiBaseUrl);
  }

}
