import { Component, ViewChild } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material';
import { OContextMenuItemComponent } from '../../context-menu-item/o-context-menu-item.component';
import { OComponentMenuBaseItem } from '../../o-content-menu-base-item.class';
import { OWrapperContentMenuComponent } from '../o-wrapper-content-menu/o-wrapper-content-menu.component';

export const DEFAULT_CONTEXT_MENU_BUTTON_INPUTS = [
  'item',
  'wrapper'
];

@Component({
  selector: 'o-wrapper-content-menu-button',
  templateUrl: 'o-wrapper-content-menu-button.component.html',
  styleUrls: ['./o-wrapper-content-menu-button.component.scss'],
  inputs: DEFAULT_CONTEXT_MENU_BUTTON_INPUTS
})
export class OWrapperContentMenuButtonComponent {

  @ViewChild(MatMenuTrigger, { static: false })
  public trigger: MatMenuTrigger;


  item: OComponentMenuBaseItem;
  set wrapper(val: OWrapperContentMenuComponent) {
    if (val) {
      val.matMenuObservable.subscribe((value) => {
        this.childMenu = value;
      })
    }
  }
  childMenu: MatMenu;
  ngAfterViewInit() {


  }
  onClick(event?) {
    if (this.item instanceof OContextMenuItemComponent) {
      this.item.triggerExecute(this.item.data, event);
    }
  }

  openMenu() {
    if (this.trigger) {
      this.trigger.openMenu();
    }
  }

  closeMenu() {
    if (this.trigger) {
      // this.trigger.closeMenu(l);
    }
  }

  
}
