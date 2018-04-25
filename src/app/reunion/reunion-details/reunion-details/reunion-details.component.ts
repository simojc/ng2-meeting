
import { Component, OnInit } from '@angular/core'
import { EvnmtService } from '../../shared/evnmt.service'
import { ActivatedRoute, Params } from '@angular/router'

import { IEvnmt, IEvnmtdtl } from '../../../Models/index'
import { AlertService, EvnmtdtlService } from '../../../_services/index';

@Component({
  templateUrl: './reunion-details.component.html',
  styles: [`
		.container {padding-left:20px; padding-right:20px;}
		.event-image {height: 100px;}
        a {cursor:pointer}
	`]
})

export class EvnmtDetailsComponent implements OnInit {

  evnmt: IEvnmt
  addMode: boolean
 // filterBy: string = 'all'
  sortBy: string = 'ordre'
  event_id: number
  itemCount: number

  constructor(private evnmtService: EvnmtService, private route: ActivatedRoute,
    private evnmtdtlService: EvnmtdtlService,
    private alertService: AlertService) {
   // console.log("Dans EventDetailsComponent constructor --- params =   ");
    this.route.params.subscribe(params => console.log( params.id));
  }

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.evnmt = this.route.snapshot.data['evnmt'];
      this.addMode = false;
     //  this.getLocation();
      this.loadEvnmtdtls();
    })
  }

  //private getLocation() {
  //  if (this.evnmt.location_id) {
  //    this.evnmtService.getLocation(this.evnmt.location_id).subscribe(
  //        loc => { this.evnmt.location  = loc;  },
  //        error => { this.alertService.error(error);}
  //    );
  //  }
  //}

  addEvnmtdtl() {
    this.addMode = true
  }

  saveNewReunionItem() {
    this.addMode = false
   }

   cancelAddReunionItem() {
    this.addMode = false
  }

  private loadEvnmtdtls() {
    // console.log("rpn.componet this.currentPers = " + this.currentPers.prenom)  
    this.evnmtdtlService.getAll(this.evnmt.id).subscribe(
      evnmtdtls => {
        // console.log(" JSON.stringify(rpnpers) =   "+ JSON.stringify(rpnpers))
        this.evnmt.evnmtdtls = evnmtdtls;
        this.itemCount = this.evnmt.evnmtdtls.length
      },
      error => { this.alertService.error(error); }
    );
  }

}
