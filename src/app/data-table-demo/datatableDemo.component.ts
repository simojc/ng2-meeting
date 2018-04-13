import { Component } from '@angular/core';

export { DataTableDemo1 } from './demo1/data-table-demo1.component'
export { DataTableDemo2 } from './demo2/data-table-demo2.component'
export { DataTableDemo3 } from './demo3/data-table-demo3.component'

@Component({
  template: `
			<div style="padding: 25px">
      <data-table-demo-1></data-table-demo-1>
      <!--<data-table-demo-1-remote></data-table-demo-1-remote>-->
      <data-table-demo-2></data-table-demo-2>
      <data-table-demo-3></data-table-demo-3>
    </div>
		 `
})

export class DatatableDemoComponent  {}
