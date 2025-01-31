import { Injector, QueryList, ViewChildren } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { OMatErrorDirective } from '../../../../directives/o-mat-error.directive';
import { OMatErrorOptions } from '../../../../types/o-mat-error.type';
import { Codes } from '../../../../util/codes';
import { ErrorsUtils } from '../../../../util/errors';
import { Util } from '../../../../util/util';

export class OTableBaseDialogClass {

  protected errorOptions: OMatErrorOptions;
  @ViewChildren(OMatErrorDirective)
  protected oMatErrorChildren: QueryList<OMatErrorDirective>;
  protected formControl: AbstractControl;

  constructor(protected injector: Injector) {
    this.errorOptions = ErrorsUtils.getErrorOptions(this.injector);
  }

  protected setFormControl(formControl: AbstractControl) {
    this.formControl = formControl;
  }

  get tooltipClass(): string {
    let result: string;
    const liteError = this.errorOptions.type === Codes.O_MAT_ERROR_LITE;
    if (liteError && Util.isDefined(this.formControl) && this.formControlHasErrors()) {
      result = `o-tooltip o-mat-error`;
    }
    return result;
  }

  get tooltipText(): string {
    let result: string;
    const liteError = this.errorOptions.type === Codes.O_MAT_ERROR_LITE;
    if (liteError && this.formControlHasErrors() && this.oMatErrorChildren && this.oMatErrorChildren.length > 0) {
      result = this.oMatErrorChildren
        .filter((oMatError: OMatErrorDirective) => Util.isDefined(oMatError.text))
        .map((oMatError: OMatErrorDirective) => oMatError.text)
        .join('\n');
    }
    return result;
  }

  protected formControlHasErrors(): boolean {
    return Util.isDefined(this.formControl) && this.formControl.touched && Util.isDefined(this.formControl.errors);
  }

  public hasError(fControl: AbstractControl, error: string): boolean {
    return fControl && fControl.touched && fControl.hasError(error);
  }
}
