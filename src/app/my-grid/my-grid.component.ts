import { Component } from "@angular/core";
import { RedComponentComponent } from "../common/index";

import { GridOptions } from "ag-grid/main";

@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styles: [`
            .container {
              display: grid;
              grid-template-columns: 1fr 2fr 1fr;
              grid-template-rows: 50vh;
              width: 100%;
          }

          #left {
              grid-row: 1/1;
              grid-column: 1/1;
              background: gray;
          }

          #center {
              grid-row: 1/1;
              grid-column: 2/2;
              overflow: hidden;
          }

          #right {
              grid-row: 1/1;
              grid-column: 3/3;
              background: gray;
          }

	`]
})
export class MyGridApplicationComponent {
  gridOptions: GridOptions;
  columnDefs: any[]
  rowData: any[];

  constructor() {
    this.gridOptions = <GridOptions>{};

    this.columnDefs = [
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" }
    ];

    this.rowData = [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 }
    ]
  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();
  }

  selectAllRows() {
    this.gridOptions.api.selectAll();
  }
}

