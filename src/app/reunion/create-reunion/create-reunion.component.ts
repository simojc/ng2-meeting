
import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { FormsModule }   from '@angular/forms';
import { EvnmtService } from '../shared/index'

import { AutresService, AlertService } from '../../_services/index';
import { IGroupe, ILocation } from '../../Models/index';

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
  locations: ILocation[];
  constructor(private router: Router, private evnmtService: EvnmtService,
    private autresService: AutresService,
    private alertService: AlertService) {
    this.loadLocations();
  }

  saveEvnmt(formValues) {
    this.evnmtService.saveEvnmt(formValues).subscribe(evnmt => {
      console.log(formValues)
      this.isDirty = false
      this.router.navigate(['/evnmts'])
    })

  }


  private loadLocations() {
    this.autresService.getLocations().subscribe(
      locations => { this.locations = locations; },
      error => { this.alertService.error(error); }
    );
  }

  cancel() {
    this.router.navigate(['/evnmts'])

  }
}
