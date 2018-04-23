
import { Component, OnInit } from '@angular/core'

import { EvnmtService } from '../shared/evnmt.service'

import { ActivatedRoute } from '@angular/router'
import { AlertService } from '../../_services/index';

//import { ToastrService } from '../../common/toastr.service'

import { IEvnmtdtl, IEvnmt, IUser, ILocation } from '../../Models/index'

//import { ActivatedRoute } from '@angular/router'

@Component({

  template: `
		<div>						
			<h1> Les rencontres mensuelles </h1>				
			<div align="center" >
				<a [routerLink]="['/reunions/new']" >  Enregistrer une réunion </a>
			</div>			
			<hr>
				<div class="row">
					<div  *ngFor="let evt of evnmts"  class="col-md-10">
						<reunions-thumbnail  [evnmt]="evt"> </reunions-thumbnail>
					</div>
				</div>
		</div>
		 `
})

export class ReunionsListComponent implements OnInit {
  evnmts: IEvnmt[]
  public currentUser: IUser

  errorMsg: string;
  errorFlag: boolean = false;
	

constructor(private evnmtService: EvnmtService,  
	private route:ActivatedRoute, private alertService: AlertService)  {
}

ngOnInit() {
  this.evnmts = this.route.snapshot.data['evnmts']
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
}




// ngOnInit() {
// 	this.evnmtService.getEvnmts().subscribe(
// 		  evnmts => { this.evnmts = evnmts;  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));},
// 			 error => { this.alertService.error(error);}
// 	);
// }

}

