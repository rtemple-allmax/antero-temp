import { BehaviorSubject, Observable, of } from "rxjs";
import { DataFieldUIState } from "./data-field-ui-state";
import { Nullable } from "@allmax-angular/shared/types";

export class PersistentUIDataSet {
  private key = 'persistent-ui-data-'
  public name: string;
    
  private readonly data = new BehaviorSubject<DataFieldUIState[]>([]);
  private readonly data$ = this.data.asObservable();

  // private fields: DataFieldUIState[] = [];

  constructor(name: string, schema: DataFieldUIState[]) {
    this.name = name;
    this.data.next(schema);
  }

  public observe(): Observable<any> {
    // const found = this.findField(fieldName);
    // return found ? of(found): of(null);
    return this.data$;
  }
  
  

  // private findField(name: string): Nullable<DataFieldUIState> {
  //   return this.fields.find(x => x.propName === name);
  // }
}