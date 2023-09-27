import { ErrorService } from "@allmax-angular/antero-web/services/error";
import { FetchService } from "@allmax-angular/shared/services";
import { Injectable } from "@angular/core";

enum Endpoints {
  '/mapping/defaultlocation'
}


@Injectable({ providedIn: 'root' })
export class MappingController {
  constructor(private fetch: FetchService, private errors: ErrorService)  { }
}