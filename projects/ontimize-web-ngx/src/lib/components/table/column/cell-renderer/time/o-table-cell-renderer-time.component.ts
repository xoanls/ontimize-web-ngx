import { ChangeDetectionStrategy, Component, Injector, TemplateRef, ViewChild, OnInit } from '@angular/core';
import { IMomentPipeArgument, OMomentPipe } from '../../../../../pipes/o-moment.pipe';

import { OBaseTableCellRenderer, DEFAULT_INPUTS_O_BASE_TABLE_CELL_RENDERER } from '../o-base-table-cell-renderer.class';
import { Util } from '../../../../../util/util';

export const DEFAULT_INPUTS_O_TABLE_CELL_RENDERER_TIME = [
  ...DEFAULT_INPUTS_O_BASE_TABLE_CELL_RENDERER,
  'format'
];

@Component({
  selector: 'o-table-cell-renderer-time',
  templateUrl: './o-table-cell-renderer-time.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: DEFAULT_INPUTS_O_TABLE_CELL_RENDERER_TIME
})
export class OTableCellRendererTimeComponent extends OBaseTableCellRenderer implements OnInit {

  public static DEFAULT_INPUTS_O_TABLE_CELL_RENDERER_TIME = DEFAULT_INPUTS_O_TABLE_CELL_RENDERER_TIME;

  protected componentPipe: OMomentPipe;
  protected pipeArguments: IMomentPipeArgument;

  protected _format: string = 'L HH:mm a';
  protected locale: string;

  @ViewChild('templateref', { read: TemplateRef, static: false }) public templateref: TemplateRef<any>;

  constructor(protected injector: Injector) {
    super(injector);
    this.tableColumn.type = 'time';
    this.setComponentPipe();
  }

  set format(value: string) {
    if (Util.isDefined(value)) {
      this._format = value;
    }
  }
  setComponentPipe() {
    this.componentPipe = new OMomentPipe(this.injector);
  }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    this.pipeArguments = {
      format: this._format
    };
  }
}
