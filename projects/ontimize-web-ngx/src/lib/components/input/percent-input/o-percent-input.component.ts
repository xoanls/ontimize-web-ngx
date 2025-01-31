import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { InputConverter } from '../../../decorators/input-converter';
import { IPercentPipeArgument, OPercentageValueBaseType, OPercentPipe } from '../../../pipes/o-percentage.pipe';
import { Util } from '../../../util/util';
import {
  DEFAULT_INPUTS_O_REAL_INPUT,
  DEFAULT_OUTPUTS_O_REAL_INPUT,
  ORealInputComponent
} from '../real-input/o-real-input.component';


export const DEFAULT_INPUTS_O_PERCENT_INPUT = [
  ...DEFAULT_INPUTS_O_REAL_INPUT,
  'valueBase: value-base'
];

export const DEFAULT_OUTPUTS_O_PERCENT_INPUT = [
  ...DEFAULT_OUTPUTS_O_REAL_INPUT
];

@Component({
  selector: 'o-percent-input',
  templateUrl: './o-percent-input.component.html',
  inputs: DEFAULT_INPUTS_O_PERCENT_INPUT,
  outputs: DEFAULT_OUTPUTS_O_PERCENT_INPUT,
  encapsulation: ViewEncapsulation.None
})
export class OPercentInputComponent extends ORealInputComponent implements OnInit {

  @InputConverter()
  grouping: boolean = true;

  valueBase: OPercentageValueBaseType = 1;

  protected componentPipe: OPercentPipe;
  protected pipeArguments: IPercentPipeArgument;

  public ngOnInit() {
    if (!Util.isDefined(this.min)) {
      this.min = 0;
    }
    if (!Util.isDefined(this.max)) {
      this.max = 100;
    }
    super.ngOnInit();

    this.pipeArguments.valueBase = this.valueBase;
  }

  setComponentPipe(): void {
    this.componentPipe = new OPercentPipe(this.injector);
  }
}
