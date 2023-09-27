import { PositioningService } from "@allmax-angular/shared/services/src/lib/positioning";
import { isNullOrEmpty, isValidEmail, isValidPhoneNumber, unsubscribe, } from "@allmax-angular/shared/utils";
import { ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output, Renderer2 } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { BehaviorSubject, noop, Subscription } from "rxjs";
import { CustomValidator } from './custom-validator.model';
import { Nullable } from "./nullable.type";

export const bindableProvider = <T extends ControlValueAccessor>(component: new (renderer: Renderer2, cdr: ChangeDetectorRef, positioning: PositioningService) => T) => {
  return { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => component), multi: true };
};

@Component({ template: ''})
export class FormfieldBaseComponent<T> implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() public label: Nullable<string> = '';
  @Input() public required = false;
  @Input() public telephone = false;
  @Input() public email = false;
  @Input() public maxLength = 0;
  @Input() public minLength = 0;
  @Input() public min: number | undefined;
  @Input() public max: number | undefined;
  @Input() public customValidators: CustomValidator<T>[] = [];
  @Input() public bypassValidation = false;
  @Input() public placeholder = '';
  @Input() public stylingMode = 'mobile'; // 'mobile' or 'desktop'
  @Input() public throttleLength = 600;
  @Input() public disabled = false;
  @Input() public tabIndex = 0;
  @Input() public autofocus = false;
  @Input() public debug = false;
  @Input() public inline = false;
  @Input() public labelFlex = '0 0 100px';

  @Output() public validityStateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  private focusedStateSubject = new BehaviorSubject<boolean>(false);

  public readonly focusedState$ = this.focusedStateSubject.asObservable();
  public get focusedState(): boolean { return this.focusedStateSubject.getValue(); }
  public set focusedState(payload: boolean) { this.focusedStateSubject.next(payload); }

  protected timeoutID: any = null;
  protected subs: Subscription[] = [];


  // protected internalValue: any = null;


  private onChangeFn: (_: any) => void = noop;
  private onTouchedFn: () => void = noop;

  public isDisabled = false;
  public touched = false;
  public valid = true;
  public errorMessage = '';

  // protected internalValue: Nullable<T> = null;

  private readonly valueSubject: BehaviorSubject<Nullable<T>> = new BehaviorSubject<Nullable<T>>(null);
  public readonly value$ = this.valueSubject.asObservable(); 

  public get value(): Nullable<T> {
    return this.valueSubject.getValue();
  }

  public set value(v: Nullable<T>) {
    this.valueSubject.next(v);
    // this.internalValue = v;
    this.onChangeFn(v);
  }

  public get hasLabel(): boolean {
    return !isNullOrEmpty(this.label)
  }

  public get flow(): string {
    if (!this.hasLabel || (this.hasLabel && this.inline)) {
      return 'row nowrap';
    } else {
      return 'column nowrap'
    }
  }

  public get uiPlaceholder(): string {
    if (this.required) {
      return '(required)';
    } else if (!isNullOrEmpty(this.placeholder)) {
      return this.placeholder
    } else {
      return '';
    }
  }

  public get alignment(): string {
    return this.flow === 'row nowrap' ? 'center' : 'stretch'
  }

  public get uiLabelFlex(): string {
    return this.flow === 'row nowrap' ? this.labelFlex : '0 0 auto'
  }

  constructor(
    protected renderer: Renderer2,
    protected cdr: ChangeDetectorRef,
    protected positioning: PositioningService,
  ) { }

  public ngOnInit(): void {
    this.setDisabledState(this.disabled);
    if (this.debug) {
      this.subs.push(this.value$.subscribe(x => console.log('Form field Base Value', x)));
    }

  }

  public ngOnDestroy(): void {
    unsubscribe(this.subs);
  }
  
  public async validate(): Promise<boolean> {
    let state = true;

    if (this.required) {
      state = !isNullOrEmpty(this.value);
      if (!state) {
        this.errorMessage = `${ this.label } is required.`;
        return state;
      }
    }

    if(this.value) {
      if (this.telephone) {
        state = isValidPhoneNumber(this.value);
        if (!state) {
          this.errorMessage = `${ this.label } must be a valid telephone number.`;
          return state;
        }
      }
  
      if (this.email) {
        state = isValidEmail(this.value);
        if (!state) {
          this.errorMessage = `${ this.label } must be a valid email address.`;
          return state;
        }
      }
  
      if (this.minLength > 0 && this.maxLength > 0 && typeof this.value === 'string') {
        state = (this.value as string).length >= this.minLength && (this.value as string).length <= this.maxLength;
        if (!state) {
          this.errorMessage = `${ this.label } must be between ${ this.minLength } and ${ this.maxLength } characters.`;
          return state;
        }
      }
  
      if (this.minLength > 0 && typeof this.value === 'string') {
        state = (this.value as string).length >= this.minLength;
        if (!state) {
          this.errorMessage = `${ this.label } must be at least ${ this.minLength } characters.`;
        }
        return state;
      }
  
      if (this.maxLength > 0 && typeof this.value === 'string') {
        state = (this.value as string).length <= this.maxLength;
        if (!state) {
          this.errorMessage = `${ this.label } must be at most ${ this.maxLength } characters.`;
          return state;
        }
      }
  
      if (this.min && this.min > 0 && typeof this.value === 'number') {
        state = this.value >= this.min;
        if (!state) {
          this.errorMessage = `${ this.label } must be at least ${ this.min }.`;
          return state;
        }
      }
  
      if (this.max && this.max > 0 && typeof this.value === 'number') {
        state = this.value <= this.max;
        if (!state) {
          this.errorMessage = `${ this.label } must be at most ${ this.max }.`;
          return state;
        }
      }
  
      for (const validator of this.customValidators) {
        state = await validator.validationFn(this.value);
        if (!state) {
          this.errorMessage = validator.errorMessage;
          break;
        }
      }
    }
    return state;
  }

  public async valueChangeHandler(): Promise<void> {
    if (!isNullOrEmpty(this.timeoutID)) {
      clearTimeout(this.timeoutID);
      this.timeoutID = null;
    }
    this.timeoutID = setTimeout(async () => {
      if (!this.bypassValidation) {
        this.valid = await this.validate();
        this.validityStateChanged.emit(this.valid);
      }
    }, this.throttleLength);
  }

  public inputHandler(e?: any): void {
    this.touched = true;
  }

  public async blurHandler(): Promise<void> {
    if (!this.touched) {
      this.onTouchedFn();
      this.touched = true;
      if (!this.bypassValidation) {
        this.valid = await this.validate();
        this.validityStateChanged.emit(this.valid);
      }
    }
  }

  public clickHandler(): void {
    this.focusedStateSubject.next(true);
  }

  public writeValue(val: Nullable<T>): void { this.value = val; }
  public registerOnChange(fn: (args: any) => any): void { this.onChangeFn = fn; }
  public registerOnTouched(fn: () => any): void { this.onTouchedFn = fn; }
  public setDisabledState(state: boolean) { this.isDisabled = state; }
}