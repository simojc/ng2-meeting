
import { Component, OnInit } from '@angular/core'

import { IEvent } from '../shared/index'

import { EventService } from '../shared/event.service'

import { ActivatedRoute } from '@angular/router'

import { ToastrService } from  '../../common/toastr.service'

//import { ActivatedRoute } from '@angular/router'

@Component({

  template: `
			<div>
				<h1> Upcomming Angular 2 Events </h1>
				<hr>
					<div class="row">
						<div  *ngFor="let evt of events"  class="col-md-5">
							<events-thumbnail  [event]="evt"> </events-thumbnail>
						</div>
					</div>
			</div>
		 `
})

export class EventsListComponent implements OnInit {
  events: IEvent[]

  errorMsg: string;
  errorFlag: boolean = false;
	
constructor(private eventService: EventService,  private route:ActivatedRoute, 
	private toastr: ToastrService,)  {
}

ngOnInit() {
  this.events = this.route.snapshot.data['events']

  //this.fetchData()
}

handlethumbnailClick(eventName) {
  //toastr.success(eventName)
  this.toastr.success(eventName)
  //'Vous avez cliqué sur: ' +
}

//fetchData() {
//  this.eventService.getEvents()
//    .subscribe(
//    (data: IEvent[]) => { this.events = data; },
//    (error) => { this.errorMsg = error; this.errorFlag = true }
//    )
//}


}

