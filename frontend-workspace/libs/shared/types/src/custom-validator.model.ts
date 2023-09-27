export class CustomValidator<T> {
  public errorMessage = '';
  public validationFn: (val: T) => boolean | Promise<boolean>;

  constructor(fn: (val: T) => boolean | Promise<boolean>, errorMessage: string) {
    this.validationFn = fn;
    this.errorMessage = errorMessage;
  }
}
