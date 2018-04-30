import { Component } from '@angular/core';

export { DataTableDemo1 } from './demo1/data-table-demo1.component'
export { DataTableDemo2 } from './demo2/data-table-demo2.component'
export { DataTableDemo3 } from './demo3/data-table-demo3.component'

@Component({
  template: `
  <body>
			<div style="padding: 25px">
      <data-table-demo-1></data-table-demo-1>
<data-table-demo-2></data-table-demo-2>
<data-table-demo-3></data-table-demo-3>
    </div>
    </body>
     `,
     styles: [`
     body{
      color:#000000;
      margin-left:0;
      margin-right:0;
      margin-top:0;
      margin-bottom:0;
      margin-width:0;
      margin-height:0;
      background-color:#A3A6BA; 
  }
  .text {
  font-family:Verdana, Arial, Helvetica, sans-serif;
  font-size:10px;
  color:541460;
  padding:5px;
  }
    `]
})

export class DatatableDemoComponent  {}


//  styleUrls: ['../_autres_styles/bootstrap.min.css'],
