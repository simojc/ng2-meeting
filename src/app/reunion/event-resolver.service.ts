
import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'

import { EventService } from './shared/index'

@Injectable()
export class EventResolver implements Resolve<any>{

      constructor(private eventService: EventService) {
      }

      resolve(route: ActivatedRouteSnapshot) {
        console.log("Dans  EventResolver  route.params['id'] =  " + route.params['id'])
        return this.eventService.getEvent(route.params['id']);           
      }

}
