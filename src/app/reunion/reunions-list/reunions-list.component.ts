
import { Component, OnInit } from '@angular/core'

//import { IEvent } from '../shared/index'

import { EventService } from '../shared/evnmt.service'

import { ActivatedRoute } from '@angular/router'

import { ToastrService } from '../../common/toastr.service'

import { IUser, IEvent } from '../../Models/index'

//import { ActivatedRoute } from '@angular/router'

@Component({

  template: `
			<div>
				<h1> Upcomming Angular 2 Events </h1>
				<hr>
					<div class="row">
						<div  *ngFor="let evt of events"  class="col-md-10">
							<events-thumbnail  [event]="evt"> </events-thumbnail>
						</div>
					</div>
			</div>
		 `
})

export class EventsListComponent implements OnInit {
  events: IEvent[]
  public currentUser: IUser

  errorMsg: string;
  errorFlag: boolean = false;
	
constructor(private eventService: EventService,  private route:ActivatedRoute, 
	private toastr: ToastrService,)  {
}

ngOnInit() {
  this.events = this.route.snapshot.data['events']
  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //this.fetchData()
}

handlethumbnailClick(eventName) {
  this.toastr.success(eventName)
}

//fetchData() {
//  this.eventService.getEvents()
//    .subscribe(
//    (data: IEvent[]) => { this.events = data; },
//    (error) => { this.errorMsg = error; this.errorFlag = true }
//    )
//}


}

