
import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

import { FormControl, FormGroup, Validators } from '@angular/forms'

import { IEvnmtdtl} from '../../../Models/index'

import { restrictedWords } from '../../../_directives/index';
import { AutresService, AlertService, EvnmtdtlService } from '../../../_services/index';


@Component({
  selector: 'create-reuniondtl',
  templateUrl: './create-reuniondtl.component.html',
  styles: [`
  em {float:right; color: #E05C65; padding-left: 10px;}
      .error input, .error select, .error textarea {background-color: #E05C65;}
      .error :: -webkik-input-placeholder {color: #999;} 
      .error :: -moz-placeholder {color: #999;} 
      .error : -moz-placeholder {color: #999;} 
      .error : ms-input-placeholder {color: #999;} 			
`]
})
export class CreateSessionComponent  {
  isDirty: boolean = true

  @Input() eventdtlId: number

  //locations: ILocation[];
  constructor(private router: Router, private evnmtdtlService: EvnmtdtlService,
    private autresService: AutresService,
    private alertService: AlertService) {
  //  this.loadLocations();
  }

  saveEvnmtdtl(formValues) {
    this.evnmtdtlService.saveEvnmtdtl(formValues).subscribe(evnmt => {
      console.log(formValues)
      this.isDirty = false
      this.router.navigate(['/evnmtdtls'])
    })

  }

  //private loadLocations() {
  //  this.autresService.getLocations().subscribe(
  //    locations => { this.locations = locations; },
  //    error => { this.alertService.error(error); }
  //  );
  //}

  cancel() {
    this.router.navigate(['/evnmtdtls'])

  }
}
