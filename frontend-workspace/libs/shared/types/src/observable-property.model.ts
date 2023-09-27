import { BehaviorSubject } from "rxjs";
import { Nullable } from "./nullable.type";

export class ObservableProperty<T> {
  private readonly subject = new BehaviorSubject<Nullable<T>>(null);
  public readonly value$ = this.subject.asObservable();
  public get value(): Nullable<T> { return this.subject.getValue(); }
  public set value(payload: Nullable<T>) { this.subject.next(payload); }

  constructor(initialValue: Nullable<T> = null) {
    this.value = initialValue;
  }
}