import { Component, ContentChild, ContentChildren, Injector, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { BehaviorSubject, Observable } from 'rxjs';

import { OContextMenuGroupComponent } from '../../context-menu-group/o-context-menu-group.component';
import { OContextMenuItemComponent } from '../../context-menu-item/o-context-menu-item.component';
import { OContextMenuSeparatorComponent } from '../../context-menu-separator/o-context-menu-separator.component';
import { OComponentMenuBaseItem } from '../../o-content-menu-base-item.class';
import { OWrapperContentMenuButtonComponent } from '../o-wrapper-content-menu-button/o-wrapper-content-menu-button.component';

export const DEFAULT_CONTEXT_MENU_CONTENT_ITEM_INPUTS = [
  'items',
  'class',
  'firstLevel'
];

@Component({
  selector: 'o-wrapper-content-menu',
  templateUrl: 'o-wrapper-content-menu.component.html',
  styleUrls: ['./o-wrapper-content-menu.component.scss'],
  inputs: DEFAULT_CONTEXT_MENU_CONTENT_ITEM_INPUTS
})
export class OWrapperContentMenuComponent {

  public class: string;

  itemsArray: OComponentMenuBaseItem[];

  @Input()
  set items(val: OComponentMenuBaseItem[]) {
    this.itemsArray = val;
  }

  @ViewChild('firstLevelTrigger', { static: false })
  public set(trigger: MatMenuTrigger) {
    if (trigger) {
      trigger.openMenu();
    }
  }

  // public childMenu: MatMenu;
  // @ViewChild('childMenu', { static: true })
  // public set childMenuRef(val: MatMenu) {
  //   this.childMenu = val;
  // }
  @ViewChildren('childMenu')
  childMenu: QueryList<MatMenu>;

  @ContentChild('childMenu', { static: false })
  childMenu2: QueryList<MatMenu>;

  @ContentChildren('childMenu')
  childMenu3: QueryList<MatMenu>;

  @ViewChildren(MatMenu)
  childMenu4: QueryList<MatMenu>;

  @ViewChild('childMenu', { static: false })
  set achildMenu(val: MatMenu) {
    if (val) {
      this.childMenuSubject.next(val)
    }
  }

  // @ViewChild(OWrapperContentMenuComponent, { static: true })
  // public menu: OWrapperContentMenuComponent;

  public firstLevel: boolean = false;

  protected childMenuSubject = new BehaviorSubject<MatMenu>(null);
  public matMenuObservable: Observable<MatMenu> = this.childMenuSubject.asObservable();


  constructor(
    protected injector: Injector
  ) { }

  ngAfterViewInit() {
    if (this.childMenu) {
      this.childMenu.changes.subscribe(() => {
        this.childMenuSubject.next(this.childMenu.first)
      })
    }

    if (this.childMenu2) {
      this.childMenu2.changes.subscribe(() => {
        this.childMenuSubject.next(this.childMenu.first)
      })
    }
    if (this.childMenu3) {
      this.childMenu3.changes.subscribe(() => {
        this.childMenuSubject.next(this.childMenu.first)
      })
    }
    if (this.childMenu4) {
      this.childMenu4.changes.subscribe(() => {
        this.childMenuSubject.next(this.childMenu.first)
      })
    }
  }

  // public onClick(item: OComponentMenuBaseItem, event?): void {
  //   if (item instanceof OContextMenuItemComponent) {
  //     item.triggerExecute(item.data, event);
  //   }
  // }

  mouseEnter(btn: OWrapperContentMenuButtonComponent) {
    btn.openMenu();
  }

  mouseLeave(btn: OWrapperContentMenuButtonComponent) {
    btn.closeMenu();
  }

  public isGroup(item: OComponentMenuBaseItem): boolean {
    return item instanceof OContextMenuGroupComponent;
  }

  public isSeparator(item: OComponentMenuBaseItem): boolean {
    return item instanceof OContextMenuSeparatorComponent;
  }

  public isItem(item: OComponentMenuBaseItem): boolean {
    return item instanceof OContextMenuItemComponent;
  }

  public getChildren(item: OComponentMenuBaseItem) {
    return item instanceof OContextMenuGroupComponent ? item.children : [];
  }

}
