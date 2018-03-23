

import './rxjs-extentions'

import { HttpModule } from '@angular/http'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './app.routes';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail/events-thumbnail.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { LocationValidator } from './events/location-validator.directive';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';
//import { UpvoteComponent } from './events/event-details/upvote/upvote.component';
//import { SessionListComponent } from './events/event-details/session-list/session-list.component'
import { EventService, EventListResolver, EventResolver, UpvoteComponent, SessionListComponent, VoterService, DurationPipe } from './events/index'

import {
  ToastrService,
  CollapsibleWellComponent,
  JQ_TOKEN,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index'


import { Error404Component } from './errors/404.component'

import { AuthService } from './user/auth.service'

declare let jQuery: Object

// return the global instance of jquery
export function jQueryFactory() {
  return window['jQuery'];
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    CreateEventComponent,
    LocationValidator,
    CreateSessionComponent,
    EventDetailsComponent,
    UpvoteComponent,
    SessionListComponent,
    VoterService,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    { provide: JQ_TOKEN, useFactory: jQueryFactory },
    ToastrService,
    EventListResolver,
    AuthService,
    EventResolver,
    VoterService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('you have not saved this event, do you really want to cancel?')
  return true
}
