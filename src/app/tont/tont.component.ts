import { Component, OnInit } from '@angular/core';
import { IUser, IPers, ITont, ITontpers } from '../Models/index'
import { AlertService, AutresService, TontService } from '../_services/index';

@Component({

  template: `
			<div>
				<h1> Les tontines </h1>
				<hr>
					<div class="row">
						<div  *ngFor="let tn of tontpers"  class="col-md-10">
							<tont-thumbnail  [tontpers]="tn"> </tont-thumbnail>
						</div>
					</div>
			</div>
		 `
})
export class TontComponent implements OnInit {
  tontpers: ITontpers[]
  public currentUser: IUser
  currentPers: IPers;

  items = [];
  itemCount = 0;

  errorMsg: string;
  errorFlag: boolean = false;

  constructor(private alertService: AlertService, private tontService: TontService,
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
    this.tontService.getAllTontPers(this.currentPers.id).subscribe(
      tontpers => {
        console.log(" tontpers =   "+ JSON.stringify(tontpers))
        this.items = tontpers;
        this.itemCount = tontpers.length
      },
      error => { this.alertService.error(error); }
    );

  }

}


