
import { Component, OnInit } from '@angular/core'
import { EventService } from '../../shared/event.service'
import { ActivatedRoute, Params } from '@angular/router'

import { IEvent, ISession } from '../../shared/index'

@Component({
  // Aucun sélecteur, car on va l'utiliser comme un enfant d'un aute component, donc pas besoin de sélecteur
  templateUrl: './event-details.component.html',
  styles: [`
		.container {padding-left:20px; padding-right:20px;}
		.event-image {height: 100px;}
        a {cursor:pointer}
	`]
})

export class EventDetailsComponent implements OnInit {

  event: IEvent
  event1: IEvent
  addMode: boolean
  filterBy: string = 'all'
  sortBy: string = 'votes'
  event_id: number

  constructor(private eventService: EventService, private route: ActivatedRoute) {
    console.log("Dans EventDetailsComponent constructor --- params =   ");
    this.route.params.subscribe(params => console.log( params.id));
  }



  ngOnInit() {
    this.route.data.forEach((data) => {
      this.event = this.route.snapshot.data['event']
      // this.event = event
      this.addMode = false

      //this.route.params.subscribe(params => { this.event_id = params.id})
      //this.event1 = this.eventService.getEvent(this.event_id)
      //console.log("Dans EventDetailsComponent  ngOnInit --- this.event_id = " + this.event_id);
      
    })
  }

  

  addSession() {
    this.addMode = true
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
    session.id = nextId
    this.event.sessions.push(session)
    this.eventService.saveEvent(this.event).subscribe()
    this.addMode = false
  }

  cancelAddSession() {
    this.addMode = false
  }
}
