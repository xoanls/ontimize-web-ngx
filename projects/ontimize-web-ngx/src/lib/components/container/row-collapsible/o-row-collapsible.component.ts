import { Component, ElementRef, forwardRef, Inject, Injector, Optional, ViewEncapsulation } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material';

import { OFormComponent } from '../../form/o-form.component';
import { OContainerCollapsibleComponent } from '../o-container-collapsible-component.class';

export const DEFAULT_INPUTS_O_ROW_COLLAPSIBLE = [
  ...OContainerCollapsibleComponent.DEFAULT_INPUTS_O_CONTAINER_COLLAPSIBLE
];

@Component({
  selector: 'o-row-collapsible',
  templateUrl: './o-row-collapsible.component.html',
  styleUrls: ['./o-row-collapsible.component.scss'],
  inputs: DEFAULT_INPUTS_O_ROW_COLLAPSIBLE,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.o-row-collapsible]': 'true',
    '[class.o-appearance-outline]': 'isAppearanceOutline()',
    '[class.o-appearance-outline-title]': 'hasTitleInAppearanceOutline()'
  }
})
export class ORowCollapsibleComponent extends OContainerCollapsibleComponent {

  public static DEFAULT_INPUTS_O_ROW_COLLAPSIBLE = DEFAULT_INPUTS_O_ROW_COLLAPSIBLE;

  constructor(
    @Optional() @Inject(forwardRef(() => OFormComponent)) protected form: OFormComponent,
    protected elRef: ElementRef,
    protected injector: Injector,
    @Optional() @Inject(MAT_FORM_FIELD_DEFAULT_OPTIONS) protected matFormDefaultOption
  ) {
    super(form, elRef, injector, matFormDefaultOption);
  }

}
