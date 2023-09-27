import { Nullable } from '@allmax-angular/shared/types';
import { BehaviorSubject, Observable } from 'rxjs'; 

export class StorageBase {
  private storage: Nullable<Storage>;
  private subjects: Nullable<Map<string, BehaviorSubject<any>>>;
  
  constructor(storage: Storage) {
    this.storage = storage;
    this.subjects = new Map<string, BehaviorSubject<any>>();
  }

  

  public observe(key: string): Nullable<Observable<any>> {
    if (!this.subjects?.has(key)) {
      this.subjects?.set(key, new BehaviorSubject<any>(null));
    }
    const item = this.storage?.getItem(key);
    if (item) {
      this.subjects?.get(key)?.next(item);
    }
    return this.subjects?.get(key)?.asObservable();
  }

  public getValue(key: string): any {
    const item = this.storage?.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  public setValue(key: string, value: any): void {
    this.storage?.setItem(key, JSON.stringify(value));
    if (!this.subjects?.has(key)) {
      this.subjects?.set(key, new BehaviorSubject<any>(value));
    } else {
      this.subjects?.get(key)?.next(value);
    }
  }
  
  public removeValue(key: string): void  {
    if (this.subjects?.has(key)) {
      this.subjects?.get(key)?.complete();
      this.subjects?.delete(key);
    }
    this.storage?.removeItem(key);
  }

  // This would affect everything like token and what not.
  // public resetStorage(): void {
  //   this.subjects?.clear();
  //   this.storage?.clear();
  // }
}