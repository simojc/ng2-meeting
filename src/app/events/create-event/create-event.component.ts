
import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { FormsModule }   from '@angular/forms';
import { EventService } from '../shared/index'

import { AutresService, AlertService } from '../../_services/index';

import {  IGroupe, ILocation} from '../../Models/index';

@Component({

    templateUrl: './create-event.component.html',
    styles: [`
    em {float:right; color: #E05C65; padding-left: 10px;}
        .error input {background-color: #E05C65;}
        .error :: -webkik-input-placeholder {color: #999;} 
        .error :: -moz-placeholder {color: #999;} 
        .error : -moz-placeholder {color: #999;} 
        .error : ms-input-placeholder {color: #999;} 			
      `]
    })

  export class CreateEventComponent {
      isDirty: boolean = true
      locations: ILocation [];
      groupes: IGroupe [];
      
      constructor(private router: Router, 
                private eventService: EventService, 
                private autresService: AutresService,
                private alertService: AlertService) {
                  this.loadLocations();
      }

      saveEvent(formValues) {
        //console.log(formValues)
        this.eventService.saveEvent(formValues).subscribe(event => { 
          this.isDirty = false
          this.router.navigate(['/events'])
        })
      }

      private loadLocations() {
        this.autresService.getLocations().subscribe(
          locations => { this.locations = locations; },
         error => { this.alertService.error(error);}
        );
      }

    cancel() {
      this.router.navigate(['/events'])
    }

}
