
import { Component, OnInit } from '@angular/core'
import { EvnmtService } from '../../shared/evnmt.service'
import { ActivatedRoute, Params } from '@angular/router'

import { IEvnmt, IEvnmtdtl } from '../../../Models/index'
import { AlertService } from '../../../_services/index';

@Component({
  // Aucun sélecteur, car on va l'utiliser comme un enfant d'un aute component, donc pas besoin de sélecteur
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
  filterBy: string = 'all'
  sortBy: string = 'votes'
  event_id: number

  constructor(private evnmtService: EvnmtService, private route: ActivatedRoute, private alertService: AlertService) {
   // console.log("Dans EventDetailsComponent constructor --- params =   ");
    this.route.params.subscribe(params => console.log( params.id));
  }

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.evnmt = this.route.snapshot.data['evnmt']
      this.addMode = false      
    })
  }

  addSession() {
    this.addMode = true
  }

  // saveNewSession(evnmtdtl: IEvnmtdtl) {
  //   const nextId = Math.max.apply(null, this.event.evnmtdtls.map(s => s.id))
  //   evnmtdtl.id = nextId
  //   this.event.evnmtdtls.push(evnmtdtl)
  //   this.evnmtService.saveEvnmt(this.event).subscribe()
  //   this.addMode = false
  // }

  cancelAddSession() {
    this.addMode = false
  }
}
