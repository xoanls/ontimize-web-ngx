import {Component, Inject, forwardRef,
  NgModule,
  ModuleWithProviders,
  ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OLightTableComponent} from './o-light-table.component';

import {MdIconModule} from '@angular2-material/icon';
import {MdToolbarModule} from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';

@Component({
  selector: 'o-light-table-button-panel',
  templateUrl: './light-table/o-light-table-button-panel.component.html',
  styleUrls: ['./light-table/o-light-table-button-panel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OLightTableButtonPanelComponent {

  private table: OLightTableComponent;
  constructor( @Inject(forwardRef(() => OLightTableComponent)) table: OLightTableComponent) {
    this.table = table;
  }

}


@NgModule({
  declarations: [OLightTableButtonPanelComponent],
  imports: [CommonModule, MdIconModule, MdToolbarModule, MdButtonModule],
  exports: [OLightTableButtonPanelComponent],
})
export class OLightTableButtonPanelModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: OLightTableButtonPanelModule,
      providers: []
    };
  }
}
