import { Component, ElementRef, forwardRef, Inject, Injector, ViewEncapsulation } from '@angular/core';

import { OBarMenuComponent } from '../o-bar-menu.component';
import { OBaseMenuItemClass } from '../o-base-menu-item.class';

export const DEFAULT_INPUTS_O_BAR_MENU_GROUP = [
  ...OBaseMenuItemClass.DEFAULT_INPUTS_O_BASE_MENU_ITEM
];

@Component({
  moduleId: module.id,
  selector: 'o-bar-menu-group',
  templateUrl: './o-bar-menu-group.component.html',
  styleUrls: ['./o-bar-menu-group.component.scss'],
  inputs: DEFAULT_INPUTS_O_BAR_MENU_GROUP,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.o-bar-menu-group]': 'true',
    '[attr.disabled]': 'disabled'
  }
})
export class OBarMenuGroupComponent extends OBaseMenuItemClass {

  public static DEFAULT_INPUTS_O_BAR_MENU_GROUP = DEFAULT_INPUTS_O_BAR_MENU_GROUP;
  id: string;

  constructor(
    @Inject(forwardRef(() => OBarMenuComponent)) protected menu: OBarMenuComponent,
    protected elRef: ElementRef,
    protected injector: Injector
  ) {
    super(menu, elRef, injector);
    this.id = 'm_' + String((new Date()).getTime() + Math.random());
  }
}
