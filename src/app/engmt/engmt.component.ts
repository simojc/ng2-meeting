
import { Component, OnInit } from '@angular/core'

import { IEngmtpers, IUser, IPers } from '../Models/index'

import { ActivatedRoute } from '@angular/router'

import { AlertService, EngmtService, AutresService } from '../_services/index';

@Component({

  template: `
			<div>
				<h1> Les engagements </h1>
				<hr>
					<div class="row">
						<div  *ngFor="let eg of engmtpers"  class="col-md-10">
							<engmt-thumbnail  [engmt]="eg"> </engmt-thumbnail>
						</div>
					</div>
			</div>
		 `
})

export class EngmtComponent implements OnInit {
  engmtpers: IEngmtpers[]
  public currentUser: IUser
  currentPers: IPers;

  items = [];
  itemCount = 0;

  errorMsg: string;
  errorFlag: boolean = false;

  constructor(private alertService: AlertService, private engmtService: EngmtService,
    private autresService: AutresService) {
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.autresService.getPersCurrentPers().subscribe(pers => {
      this.currentPers = pers;
      // console.log(" Ds subscribe this.currentPers.Nom = " + this.currentPers.nom)   
      this.loadEngmt();
    })
  }

  private loadEngmt() { 
    this.engmtService.getAllEngmtPers(this.currentPers.id).subscribe(
     engmtpers => {
       this.items = engmtpers;
       this.itemCount = engmtpers.length
      },
      error => { this.alertService.error(error); }
    );

  }




}

