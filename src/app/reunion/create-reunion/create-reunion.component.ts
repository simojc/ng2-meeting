
import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { FormsModule }   from '@angular/forms';
import { EvnmtService } from '../shared/index'

@Component({

  templateUrl: './create-reunion.component.html',
  styles: [`
  em {float:right; color: #E05C65; padding-left: 10px;}
      .error input {background-color: #E05C65;}
      .error :: -webkik-input-placeholder {color: #999;} 
      .error :: -moz-placeholder {color: #999;} 
      .error : -moz-placeholder {color: #999;} 
      .error : ms-input-placeholder {color: #999;} 			
`]
})
export class CreateReunionComponent {
  isDirty: boolean = true
  constructor(private router: Router, private evnmtService: EvnmtService) {

  }

  saveEvent(formValues) {
    this.evnmtService.saveEvnmt(formValues).subscribe(event => {
      console.log(formValues)
      this.isDirty = false
      this.router.navigate(['/events'])
    })

  }


  cancel() {
    this.router.navigate(['/events'])

  }
}