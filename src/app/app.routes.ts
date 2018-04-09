import { Routes } from '@angular/router'

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  CreateSessionComponent,
  EventResolver,
  EventRouteActivator
} from './events/index'

import {

  CreateReunionComponent,
  ReunionsListComponent,
  EvnmtResolver,
  EvnmtListResolver,
  EvnmtDetailsComponent
} from './reunion/index'

import { Error404Component } from './errors/404.component'

import { AuthGuard } from './_guards/index';

export const appRoutes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  //{path: 'events', component: EventsListComponent, resolve:{events:EventListResolver}, canActivate: [AuthGuard]},
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
  { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolver } },
  //{ path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: 'events/session/new', component: CreateSessionComponent },

  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule' },

  { path: 'reunions/new', component: CreateReunionComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'reunions', component: ReunionsListComponent , resolve: { evnmts: EvnmtListResolver } },
  //{ path: 'reunions', component: ReunionsListComponent },
  { path: 'reunions/:id', component: EvnmtDetailsComponent, resolve: { evnmt: EvnmtResolver } },
  //{ path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: 'reunions/detail/new', component: CreateSessionComponent },

]
