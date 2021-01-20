import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { MatSelectionList } from '@angular/material';

export const DEFAULT_DUAL_LIST_SELECTOR = [
  //key: The unique identifier field of each object in the data source and data destination arrays
  'key',
  //display - The field of each object for displaying the object each the lists,
  'display',
  //data-source: The source array of objects or strings for the list.
  'dataSource:data-source',
  //data-destination : The destination array of objects or strings selected from the source
  'dataDestination: data-destination',
  'titleListDataSource: title-list-data-source',
  'titleListDataDestination: title-list-data-destination'
];

@Component({
  selector: 'o-dual-list-selector',
  templateUrl: './o-dual-list-selector.component.html',
  styleUrls: ['./o-dual-list-selector.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: DEFAULT_DUAL_LIST_SELECTOR,
  host: {
    '[class.o-dual-list-selector]': 'true'
  }
})
export class ODualListSelectorComponent {

  public dataSource: Array<any> = [];
  public dataDestination: Array<any> = [];
  public titleListDataSource: string = '';
  public titleListDataDestination: string = '';
  public key = '';
  public display = '';
  constructor() { }



  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addToGroupedColumns(columnsToGrouped: MatSelectionList) {
    const self = this;
    columnsToGrouped.selectedOptions.selected.forEach(x => {
      //added in dataDestination
      self.dataDestination.push(x.value);
      //remove item in dataSource
      self.dataSource = this.dataSource.filter(groupedColumn => groupedColumn[this.key] != x.value[this.key]);
    });

  }

  removeGroupedColumns(groupedColumns: MatSelectionList) {
    const self = this;
    groupedColumns.selectedOptions.selected.forEach(x => {

      self.dataSource.push(x.value);
      self.dataDestination = this.dataDestination.filter(groupedColumn => groupedColumn[this.key] != x.value[this.key]);
    });
  }

  onRemoveGroupColumn(column: any) {
    this.dataDestination = this.dataDestination.filter((oCol: any) => oCol[this.key] !== column[this.key]);
    this.dataSource.push(column);
  }

  isAllSelected(list: MatSelectionList): boolean {
    const numSelected = list.selectedOptions.selected.length;
    const numRows = list.options ? list.options.length : 0;
    return numRows !== 0 && numSelected === numRows;

  }

  masterToggle(list: MatSelectionList) {
    list.selectedOptions.selected.length === list.options.length ?
      list.selectedOptions.clear() :
      list.selectAll();

  }

  isDisabledSortAsc(list: MatSelectionList) {
    let sortAsc = true;
    if (list.selectedOptions.selected.length !== 0) {
      const index = list.options.toArray().findIndex(x => x.value[this.key] === list.selectedOptions.selected[0].value[this.key]);

      if (index > 0) {
        sortAsc = false;
      }

    }
    return sortAsc;
  }

  isDisabledSortDesc(list: MatSelectionList) {
    let sortDesc = true;
    if (list.selectedOptions.selected.length !== 0) {
      const index = list.options.toArray().findIndex(x => x.value[this.key] === list.selectedOptions.selected[0].value[this.key]);

      if (index >= 0 && (index + 1) !== list.options.toArray().length) {
        sortDesc = false;
      }

    }
    return sortDesc;
  }

  sortItemsSelectedAsc(list: MatSelectionList) {
    const self = this;
    const itemsSelected = list.selectedOptions.selected;
    itemsSelected.forEach(item => {
      const index = list.options.toArray().findIndex(x => x.value[this.key] === item.value[this.key]);
      moveItemInArray(this.dataDestination, index, index - 1);
    });
  }

  sortItemsSelectedDesc(list: MatSelectionList) {
    const self = this;
    const itemsSelected = list.selectedOptions.selected;
    itemsSelected.forEach(item => {
      const index = list.options.toArray().findIndex(x => x.value[this.key] === item.value[this.key]);

      moveItemInArray(self.dataDestination, index, index + 1);
    });


  }

  getValue(): Array<any> {
    return this.dataDestination;
  }

  setSelectedItems(items: Array<any>) {

  }

}
