import { Nullable } from "@allmax-angular/shared/types";
import { BehaviorSubject } from "rxjs";

export class DataPoint<T = any> {
  public name = '';
  private readonly subject: BehaviorSubject<Nullable<T>> = new BehaviorSubject<Nullable<T>>(null);
  public readonly changes$ = this.subject.asObservable();

  public get value(): Nullable<T> {
    return this.subject.getValue();
  }

  constructor(name: string, initialValue: Nullable<T> = null) {
    this.name = name;
    this.set(initialValue);
  }

  public set(val: Nullable<T>): void {
    this.subject.next(val);
  }
}