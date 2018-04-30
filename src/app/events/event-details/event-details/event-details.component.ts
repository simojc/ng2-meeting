
import { Component, OnInit } from '@angular/core'
import { EventService } from '../../shared/event.service'
import { ActivatedRoute, Params } from '@angular/router'

import { AuthService } from '../../../user/auth.service'

import { IEvent, ISession, IUser } from '../../../Models/index'

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
  addMode: boolean
  filterBy: string = 'all'
  sortBy: string = 'votes'
  event_id: number
  public currentUser: IUser

  constructor(private eventService: EventService, private route: ActivatedRoute, 
    private auth: AuthService) { }

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.event = this.route.snapshot.data['event']
      this.addMode = false
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
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
