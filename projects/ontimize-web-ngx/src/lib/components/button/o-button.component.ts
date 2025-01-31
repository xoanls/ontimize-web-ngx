import { Component, EventEmitter, Injector, OnInit, Type, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material';

import { ActivatedRoute } from '@angular/router';
import { InputConverter } from '../../decorators/input-converter';
import { PermissionsService } from '../../services';
import { OPermissions } from '../../types';
import { Codes, Util } from '../../util';

export const DEFAULT_INPUTS_O_BUTTON = [
  'oattr: attr',
  'olabel: label',
  // type [BASIC|RAISED|STROKED|FLAT|ICON|FAB|MINI-FAB]: The type of button. Default: STROKED.
  'otype: type',
  // icon [string]: Name of google icon (see https://design.google.com/icons/)
  'icon',
  'svgIcon : svg-icon',
  'iconPosition: icon-position',
  'image',
  // enabled [yes|no|true|false]: Whether the button is enabled. Default: yes
  'enabled',
  // color: Theme color palette for the component.
  'color'
];
export const DEFAULT_OUTPUTS_O_BUTTON = [
  'onClick',
  'click'
];
@Component({
  selector: 'o-button',
  inputs: DEFAULT_INPUTS_O_BUTTON,
  outputs: DEFAULT_OUTPUTS_O_BUTTON,
  templateUrl: './o-button.component.html',
  styleUrls: ['./o-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.o-button]': 'true',
    '[class.o-button-icon-position-top]': 'iconPosition==="top"',
    '[class.o-button-icon-position-bottom]': 'iconPosition==="bottom"'

  }
})
export class OButtonComponent implements OnInit {

  protected static DEFAULT_TYPE = 'STROKED';

  protected oattr: string;
  public olabel: string;
  protected otype: string;
  public icon: string;
  public svgIcon: string;
  public iconPosition: string = Codes.ICON_POSITION_LEFT; // left (default)
  public image: string;
  @InputConverter() enabled: boolean = true;
  public color: ThemePalette;
  public visible: boolean = true;

  /* Outputs */
  public onClick: EventEmitter<Event> = new EventEmitter<Event>();
  public click: EventEmitter<Event> = new EventEmitter<Event>();
  protected permissionsService: PermissionsService;
  protected permissions: OPermissions;

  constructor(protected injector: Injector, protected actRoute: ActivatedRoute) {
    this.otype = OButtonComponent.DEFAULT_TYPE;
    this.permissionsService = this.injector.get<PermissionsService>(PermissionsService as Type<PermissionsService>);
  }

  ngOnInit(): void {
    if (this.otype) {
      this.otype = this.otype.toUpperCase();
    }
    this.permissions = this.permissionsService.getOButtonPermissions(this.oattr, this.actRoute);
    if (Util.isDefined(this.permissions)) {
      this.enabled = this.permissions.enabled;
      this.visible = this.permissions.visible;
    }
  }

  onButtonClick(event: MouseEvent): void {
    event.stopPropagation();
    if (this.enabled) {
      this.click.emit(event);
      this.onClick.emit(event);
    }
  }

  get needsIconButtonClass(): boolean {
    return (this.icon !== undefined || this.svgIcon !== undefined) && (this.olabel === undefined || this.olabel === '');
  }

  isFab(): boolean {
    return this.otype === 'FAB';
  }

  isRaised(): boolean {
    return this.otype === 'RAISED';
  }

  isFlat(): boolean {
    return this.otype === 'FLAT';
  }

  isStroked(): boolean {
    return (this.otype === 'STROKED' || !this.otype);
  }

  isBasic(): boolean {
    return this.otype === 'BASIC';
  }

  isMiniFab(): boolean {
    return this.otype === 'FAB-MINI';
  }

  isIconButton(): boolean {
    return this.otype === 'ICON';
  }
  isVisible(): boolean {
    return this.visible;
  }
}
