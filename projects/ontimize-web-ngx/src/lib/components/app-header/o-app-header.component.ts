import { Component, EventEmitter, Injector, ViewChild, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { InputConverter } from '../../decorators/input-converter';
import { AuthService } from '../../services';
import { DialogService } from '../../services/dialog.service';
import { OModulesInfoService } from '../../services/o-modules-info.service';
import { Codes } from '../../util';
import { OUserInfoComponent } from '../user-info/o-user-info.component';

export const DEFAULT_INPUTS_O_APP_HEADER = [
  'showUserInfo: show-user-info',
  'showLanguageSelector: show-language-selector',
  'useFlagIcons: use-flag-icons',
  'color',
  'headerHeight:header-height',
  'showTitle: show-title'
];

export const DEFAULT_OUTPUTS_O_APP_HEADER = [
  'onSidenavToggle'
];

@Component({
  selector: 'o-app-header',
  inputs: DEFAULT_INPUTS_O_APP_HEADER,
  outputs: DEFAULT_OUTPUTS_O_APP_HEADER,
  templateUrl: './o-app-header.component.html',
  styleUrls: ['./o-app-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.o-app-header]': 'true',
    '[class.o-app-header-small]': 'headerHeight==="small"',
    '[class.o-app-header-medium]': 'headerHeight==="medium"',
    '[class.o-app-header-large]': 'headerHeight==="large"'
  }
})
export class OAppHeaderComponent {

  protected dialogService: DialogService;
  protected modulesInfoService: OModulesInfoService;
  protected authService: AuthService;
  public title: string = '';
  public showTitle = false;
  public headerTitle$: Observable<string>;

  @ViewChild('userInfo', { static: false })
  public userInfo: OUserInfoComponent;

  @InputConverter()
  showUserInfo: boolean = true;
  @InputConverter()
  showLanguageSelector: boolean = true;
  @InputConverter()
  useFlagIcons: boolean = false;

  public onSidenavToggle = new EventEmitter<void>();
  protected _headerHeight = Codes.DEFAULT_ROW_HEIGHT;

  set headerHeight(value) {
    this._headerHeight = value ? value.toLowerCase() : value;
    if (!Codes.isValidRowHeight(this._headerHeight)) {
      this._headerHeight = Codes.DEFAULT_ROW_HEIGHT;
    }
  }

  get headerHeight(): string {
    return this._headerHeight;
  }

  private _color: ThemePalette;

  constructor(
    protected injector: Injector,
    protected router: Router,
  ) {
    this.dialogService = this.injector.get(DialogService);
    this.modulesInfoService = this.injector.get(OModulesInfoService);
    this.authService = this.injector.get(AuthService);
    this.router = this.injector.get(Router);
    this.headerTitle$ = this.modulesInfoService.getModuleChangeObservable();
  }
  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd),
      map(() => {
        let route: ActivatedRoute = this.router.routerState.root;
        let routeTitle = '';
        while (route!.firstChild) {
          route = route.firstChild;
        }
        if (route.snapshot.data['oAppHeaderTitle']) {
          routeTitle = route!.snapshot.data['oAppHeaderTitle'];
        }
        return routeTitle;
      })).subscribe((title: string) => {
        if (title) {
          this.title = title;
        }
        else {
          this.title = '';
        }
      })
  }
  onLogoutClick() {
    this.authService.logoutWithConfirmation();
  }

  set color(newValue: ThemePalette) {
    this._color = newValue;
  }

  get color(): ThemePalette {
    return this._color;
  }

}
