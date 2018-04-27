import { Component, Inject, forwardRef, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import { DataTable } from './table';


@Component({
  selector: 'data-table-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  host: {
    '(document:click)': '_closeSelector()'
  }
})
export class DataTableHeader {

    columnSelectorOpen = false;

    _closeSelector() {
        this.columnSelectorOpen = false;
    }

    constructor( @Inject(forwardRef(() => DataTable)) public dataTable: DataTable, private router: Router) {}
    

  }
