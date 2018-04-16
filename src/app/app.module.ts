
import './rxjs-extentions'

import { HttpModule } from '@angular/http'

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
//import { CommonModule } from '@angular/common';

import { AgGridModule } from 'ag-grid-angular/main';

import { DataTableModule } from './data-table';

//import { DataTableModule } from 'angular-5-data-table';

//import { MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NavBarComponent  } from './nav/navbar.component';
import { appRoutes } from './app.routes';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail/events-thumbnail.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
// import { LocationValidator } from './events/location-validator.directive';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { EventDetailsComponent } from './events/event-details/event-details/event-details.component';

import { RpnpersService } from './_services/index';

import { 
  EventService, 
  EventListResolver, 
  EventResolver, 
  UpvoteComponent, 
  SessionListComponent, 
  VoterService,
   DurationPipe ,
   EventRouteActivator,
   AlertService,AutresService,
   ErrorInterceptorProvider, TokenInterceptor,
   AuthGuard,
   AlertComponent,
   LocationValidator
  } from './events/index'

  import { 
        CreateReunionComponent,
        ReunionsListComponent,
        ReunionsThumbnailComponent,
        EvnmtListResolver,
        EvnmtResolver,
        EvnmtService,
        EvnmtDetailsComponent
    } from './reunion/index'

  

import {
  ToastrService,
  CollapsibleWellComponent,
  RedComponentComponent,
  GroupeComponent
} from './common/index'

import { GhomalaComponent } from './ghomala/index';
import { RpnpersComponent } from './rpn/index';

import { MyGridApplicationComponent } from './my-grid/my-grid.component'

import { DataTableDemo1, DataTableDemo2, DataTableDemo3, DatatableDemoComponent } from './data-table-demo/index';

import { Error404Component } from './errors/404.component'

import { AuthService } from './user/auth.service'
import { UserService } from './user/user.service'

// declare let jQuery: Object

// // return the global instance of jquery
// export function jQueryFactory() {
//   return window['jQuery'];
// }

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    CreateEventComponent,
    LocationValidator,
    CreateSessionComponent,
    EventDetailsComponent,
    UpvoteComponent,
    SessionListComponent,
    DurationPipe,
    Error404Component,
    CollapsibleWellComponent,
    AlertComponent,
    CreateReunionComponent,
    ReunionsListComponent,
    ReunionsThumbnailComponent,
    EvnmtDetailsComponent,
    MyGridApplicationComponent,
    RedComponentComponent,
    GroupeComponent,
    DataTableDemo1,
    DataTableDemo2,
    DataTableDemo3,
    DatatableDemoComponent,
    GhomalaComponent,
    RpnpersComponent
  ],
  imports: [
    BrowserModule,
    //AgGridModule.withComponents([...Liste des component qui seront utilisé dans le grid....]),
    AgGridModule.withComponents([]),
    FormsModule,
    DataTableModule,
    HttpModule,
    HttpClientModule,
        ReactiveFormsModule,
		RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    //{ provide: JQ_TOKEN, useFactory: jQueryFactory },
    ToastrService,
    EventListResolver,
    AuthService,
    UserService,
    EventResolver,
    VoterService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventRouteActivator,
       {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
     },
        ErrorInterceptorProvider,
        AuthGuard,
        AlertService,
        AutresService,
        EvnmtResolver,
        EvnmtListResolver,
        EvnmtService,
        RpnpersService
        
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('you have not saved this event, do you really want to cancel?')
  return true
}
